import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox } from 'shared/ui/list-box';
import { Country } from '../../model/types';


const options = Object.entries(Country)
  .map(country => ({ value: country[0], content: country[1] }));


export interface CountryProps {
  value      : Country
  readOnly   : boolean
  className? : string
  onChange   : (value: string, name: string) => void
}


export const CountrySelect = memo((props: CountryProps) => {
  const
    { t } = useTranslation(),
    { className, value, readOnly, onChange } = props;

  const handlerChange = useCallback((v: string) => {
    onChange(v, 'country')
  }, [onChange]);


  return (
    <Listbox
      label        = {t('Страна')}
      readOnly     = {readOnly}
      value        = {value}
      defaultValue = {t('Укажите страну')}
      items        = {options}
      className    = {className}
      direction    = 'top right'
      onChange     = {handlerChange}
    />
  )
});
