import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Profile, selectProfileReadonly } from 'entities/profile';
import { useTranslation } from 'react-i18next';
import { Currency } from 'entities/currency';
import { CurrencySelect } from 'entities/currency/ui/currency-select';
import { cn, Mods } from 'shared/lib';
import { Avatar, Loader, Text, TextAlign, TextTheme } from 'shared/ui';
import { Input } from 'shared/ui/input';
import s from './index.module.scss';
import { Country, CountrySelect } from 'entities/country';



interface Props {
  className? : string
  profile    : Profile
  loading    : boolean
  error      : string
  readOnly   : boolean
  onChange   : (value: string | number, name: string) => void
}


export const ProfileCard: FC<Props> = ({ className, profile, loading, error, readOnly, onChange }) => {
  const
    { t } = useTranslation('profile'),
    { t: e } = useTranslation('errors'),
    readonly = useSelector(selectProfileReadonly),
    { firstname, lastname, age, city, country, currency, avatar = '' } = profile;

  const mods: Mods = {
    [s.editing] : !readonly,
    [s.loading] : loading,
    [s.error]   : error
  };

  const handlerChange = (value: string, name: string) => {
    if (name === 'age') onChange(Number(value || 0), name);
    else onChange(value || '', name);
  };


  if (error) return (
    <div className={cn(s.root, mods, [className])}>
      <Text
        theme = {TextTheme.ERROR}
        title = {e('Произошла ошибка при загрузке')}
        text  = {e(error)}
        align = {TextAlign.CENTER}
      />
    </div>
  )


  return (
    <div className={cn(s.root, mods, [className])}>
      {
        loading
          ? <Loader />
          : <>
              {
                avatar && <div className={s.avatarWrapper}>
                  <Avatar
                    src  = {avatar}
                    alt  = {t('Аватар')}
                  />
                </div>
              }
              <Input
                value     = {firstname}
                name      = 'firstname'
                label     = {t('Ваше имя')}
                readOnly  = {readOnly}
                className = {s.input}
                onChange  = {handlerChange}
              />
              <Input
                value     = {lastname}
                name      = 'lastname'
                label     = {t('Ваша фамилия')}
                readOnly  = {readOnly}
                className = {s.input}
                onChange  = {handlerChange}
              />
              <Input
                value     = {age}
                name      = 'age'
                type      = 'number'
                label     = {t('Возраст')}
                readOnly  = {readOnly}
                className = {s.input}
                onChange  = {handlerChange}
              />
              <CurrencySelect
                value     = {currency as Currency}
                readOnly  = {readOnly}
                className = {s.input}
                onChange  = {handlerChange}
              />
              <CountrySelect
                value     = {country as Country}
                readOnly  = {readOnly}
                className = {s.input}
                onChange  = {handlerChange}
              />
              <Input
                value     = {city}
                name      = 'city'
                label     = {t('Город')}
                readOnly  = {readOnly}
                className = {s.input}
                onChange  = {handlerChange}
              />
              <Input
                value     = {avatar}
                name      = 'avatar'
                label     = {t('Ссылка на аватар')}
                readOnly  = {readOnly}
                className = {s.input}
                onChange  = {handlerChange}
              />
            </>
      }
    </div>
  )
};
