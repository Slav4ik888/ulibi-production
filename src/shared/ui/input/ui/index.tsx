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


export const Input: FC<Props> = memo((props: Props) => {
  const {
    id = getRandom5Letters(), value, autofocus, type, label, placeholder, className, onChange, ...rest
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const handlerBlur = () => setIsFocused(false);
  const handlerFocus = () => setIsFocused(true);

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

Input.defaultProps = {
  id        : getRandom5Letters(),
  className : '',
  value     : '',
  label     : '',
  autofocus : false,
  // eslint-disable-next-line react/default-props-match-prop-types
  type      : 'text',
  onChange  : () => {}
};
