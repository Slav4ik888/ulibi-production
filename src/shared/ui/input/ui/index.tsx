import { FC, InputHTMLAttributes, ChangeEvent, memo, useState, useEffect, useRef } from 'react';
import { cn, getRandom5Letters } from 'shared/lib';
import s from './index.module.scss';

// 1 element what we want include, 2 - excude
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface Props extends HTMLInputProps {
  className? : string
  id?        : string
  value?     : string
  label?     : string
  autofocus? : boolean
  onChange?  : (value: string) => void
}


export const Input = memo((props: Props) => {
  const {
    id   = getRandom5Letters(),
    type = 'text',
    value, autofocus, label, placeholder, className, onChange, ...rest
  } = props;

  const
    ref                       = useRef<HTMLInputElement>(null),
    [isFocused, setIsFocused] = useState(false),
    handlerBlur               = () => setIsFocused(false),
    handlerFocus              = () => setIsFocused(true);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(autofocus);
      ref.current?.focus();
    }
  }, [autofocus]);

  const [caretPposition, setCaretPosition] = useState(0);
  const hanlderSelect = (e: any) => setCaretPosition(e?.target?.selectionStart || 0);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  return (
    <div className={cn(s.root, {}, [className])}>
      {
        label && <label htmlFor={id} className={s.label}>{`${label}>`}</label>
      }

      <div className={s.caretWrapper}>
        <input
          id          = {id}
          type        = {type}
          value       = {value}
          placeholder = {placeholder}
          className   = {s.input}
          ref         = {ref}
          onBlur      = {handlerBlur}
          onFocus     = {handlerFocus}
          onChange    = {handlerChange}
          onSelect    = {hanlderSelect}
          {...rest}
        />
        {
          isFocused && <span
            className={s.caret}
            style = {{ left: `${caretPposition * 8}px` }}
          />
        }
      </div>
    </div>
  )
});
