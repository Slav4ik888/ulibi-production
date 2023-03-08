import { ChangeEvent, useMemo } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


export interface SelectOption<T extends string> {
  value   : T
  content : string
}

export interface SelectProps<T extends string> {
  className? : string
  label?     : string
  options    : SelectOption<T>[]
  value      : string
  name?      : string
  disabled?  : boolean
  onChange   : (v: T, n: string) => void
}


export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, options, label, value, name, disabled, onChange } = props;

  const optionList = useMemo(() => options?.map(opt => <option
    key       = {opt.value}
    value     = {opt.value}
    className = {s.option}
  >
    {opt.content}
  </option>), [options]);


  const handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value as T, name || '');
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
};
