import { InputHTMLAttributes, ChangeEvent, memo, useState, useEffect, useRef } from 'react';
import { cn, getRandom5Letters, Mods } from 'shared/lib';
import s from './index.module.scss';
import { getNum } from './utils';

// 1 element what we want include, 2 - excude
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface Props extends HTMLInputProps {
  className? : string
  id?        : string
  value?     : string | number
  type?      : 'number'
  label?     : string
  name?      : string
  autofocus? : boolean
  readOnly?  : boolean
  onChange?  : (value: string, name: string) => void
}


export const Input = memo((props: Props) => {
  const {
    id    = getRandom5Letters(),
    type  = 'text',
    value = '',
    name, readOnly, autofocus, label, placeholder, className, onChange, ...rest
  } = props;

  const
    ref                       = useRef<HTMLInputElement>(null),
    [isFocused, setIsFocused] = useState(false),
    handlerBlur               = () => setIsFocused(false),
    handlerFocus              = () => setIsFocused(true);

  const isCaretVisible = isFocused && !readOnly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(autofocus);
      ref.current?.focus();
    }
  }, [autofocus, readOnly]);

  const [caretPposition, setCaretPosition] = useState(0);
  const hanlderSelect = (e: any) => setCaretPosition(e?.target?.selectionStart || 0);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target?.value;

    if (type === 'number') value = getNum(value);

    onChange?.(value, e.target.name);
    setCaretPosition(value.length);
  };

  const mods: Mods = {
    [s.readonly]: readOnly
  };


  return (
    <div className={cn(s.root, mods, [className])}>
      {
        label && <label htmlFor={id} className={s.label}>{`${label}>`}</label>
      }
      <div className={s.caretWrapper}>
        <input
          id          = {id}
          type        = {type}
          value       = {value}
          name        = {name}
          placeholder = {placeholder}
          className   = {s.input}
          ref         = {ref}
          readOnly    = {readOnly}
          onBlur      = {handlerBlur}
          onFocus     = {handlerFocus}
          onChange    = {handlerChange}
          onSelect    = {hanlderSelect}
          {...rest}
        />
        {
          isCaretVisible && <span
            className = {s.caret}
            style     = {{ left: `${caretPposition * 7.4}px` }}
          />
        }
      </div>
    </div>
  )
});
