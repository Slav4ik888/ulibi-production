import { Listbox as HListbox } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'
import { cn, Mods } from 'shared/lib';
import { DropdownDirection } from 'shared/types/ui';
// eslint-disable-next-line slavchik888-plugin/path-checker
import { Button, ButtonTheme } from 'shared/ui';
// eslint-disable-next-line slavchik888-plugin/path-checker
import { HStack } from 'shared/ui/stack';
import s from './index.module.scss';



interface ListBoxItem {
  id?       : number
  value     : string
  content   : ReactNode
  disabled? : boolean
}

interface ListBoxProps {
  label?        : string
  value?        : string
  defaultValue? : string
  readOnly?     : boolean
  items?        : ListBoxItem[]
  className?    : string
  direction?    : DropdownDirection
  onChange      : (value: string) => void
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left'     : s.optionsTopLeft,
  'top right'    : s.optionsTopRight,
  'bottom left'  : s.optionsBottomLeft,
  'bottom right' : s.optionsBottomRight
}

export function Listbox(props: ListBoxProps) {
  const {
    items, label, className, value, defaultValue, readOnly,
    direction = 'bottom left',
    onChange
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap='4'>
      {
        label && <span className={s.label}>{`${label}> `}</span>
      }
      <HListbox
        as        = 'div'
        disabled  = {readOnly}
        className = {cn(s.listBox, {}, [className])}
        value     = {value}
        onChange  = {onChange}
      >
        <HListbox.Button as={Fragment}>
          <Button
            disabled = {readOnly}
            theme    = {ButtonTheme.BACKGROUND}
          >
            {value || defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options
          // eslint-disable-next-line i18next/no-literal-string
          // anchor    = 'bottom'
          className = {cn(s.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListbox.Option
              key       = {item.value}
              value     = {item.value}
              as        = {Fragment}
              disabled  = {item.disabled}
            >
              {({ active, selected, disabled }) => (
                <li
                  className={cn(s.item, {
                    [s.active]   : active,
                    [s.disabled] : disabled,
                  })}
                >
                  {
                    selected
                      ? `!!! ${item.content}`
                      : item.content
                  }
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  )
}
