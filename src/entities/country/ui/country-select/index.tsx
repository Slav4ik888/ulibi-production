import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';
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
    <Select
      value     = {value || ''}
      options   = {options}
      label     = {t('Страна')}
      disabled  = {readOnly}
      className = {className}
      onChange  = {handlerChange}
    />
  )
});
