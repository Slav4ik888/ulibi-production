import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react';
import { cn, Mods } from 'shared/lib';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../../app-link';
import s from './index.module.scss';



export interface DropdownMenuItem {
  disabled? : boolean
  content   : ReactNode
  onClick?  : () => void
  href?     : string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left'     : s.optionsTopLeft,
  'top right'    : s.optionsTopRight,
  'bottom left'  : s.optionsBottomLeft,
  'bottom right' : s.optionsBottomRight
}

interface Props {
  className? : string
  items      : DropdownMenuItem[]
  trigger    : ReactNode
  direction? : DropdownDirection
}


export function DropdownMenu(props: Props) {
  const { className, items, trigger, direction = 'bottom right' } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as='div' className={cn(s.dropdown, {}, [className])}>
      <Menu.Button className={s.btn}>{trigger}</Menu.Button>
      <Menu.Items className={cn(s.menu, {}, menuClasses)}>
        {
          items.map((item, idx) => {
            const content = ({ active }: { active: boolean }) => (
              <button
                type      = 'button'
                disabled  = {item.disabled}
                className = {cn(s.item, { [s.active]: active })}
                onClick   = {item.onClick}
              >
                {item.content}
              </button>
            );

            if (item.href) {
              return <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={idx}>
                {content}
              </Menu.Item>
            }

            return <Menu.Item as={Fragment} disabled={item.disabled} key={idx}>
              {content}
            </Menu.Item>
          })
        }
      </Menu.Items>
    </Menu>
  )
}
