import { ChangeEvent, memo, useMemo } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


interface SelectOption {
  value   : string
  content : string
}

export interface SelectProps {
  className? : string
  label?     : string
  options    : SelectOption[]
  value      : string
  name?      : string
  disabled?  : boolean
  onChange   : (v: string, n: string) => void
}


export const Select = memo((props: SelectProps) => {
  const { className, options, label, value, name, disabled, onChange } = props;

  const optionList = useMemo(() => options?.map(opt => <option
    key       = {opt.value}
    value     = {opt.value}
    className = {s.option}
  >
    {opt.content}
  </option>), [options]);


  const handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value, name || '');
  };


  return (
    <div className={cn(s.root, {}, [className])}>
      {
        label && <span className={s.label}>{`${label}> `}</span>
      }
      <select
        value     = {value}
        disabled  = {disabled}
        className = {s.select}
        onChange  = {handlerChange}
      >
        {optionList}
      </select>
    </div>
  )
});
