import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';
import { Currency } from '../../model/types';


const options = Object.entries(Currency).map(cur => ({ value: cur[0], content: cur[1] }));


export interface Props {
  value      : Currency
  readOnly   : boolean
  className? : string
  onChange   : (value: string, name: string) => void
}


export const CurrencySelect = memo((props: Props) => {
  const
    { t } = useTranslation(),
    { className, value, readOnly, onChange } = props;

  const handlerChange = useCallback((v: string) => {
    onChange(v, 'currency')
  }, [onChange]);


  return (
    <Select
      value     = {value || ''}
      options   = {options}
      label     = {t('Валюта')}
      disabled  = {readOnly}
      className = {className}
      onChange  = {handlerChange}
    />
  )
});
