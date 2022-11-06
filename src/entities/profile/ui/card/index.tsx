import { selectProfileData, selectProfileError, selectProfileLoading } from 'entities/profile/model/selectors';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib';
import { Button, Text } from 'shared/ui';
import { Input } from 'shared/ui/input';
import s from './index.module.scss';



interface Props {
  className?: string
}


export const ProfileCard: FC<Props> = ({ className }) => {
  const
    { t }   = useTranslation('profile'),
    data    = useSelector(selectProfileData),
    loading = useSelector(selectProfileLoading),
    error   = useSelector(selectProfileError);


  return (
    <div className={cn(s.root, {}, [className])}>
      <div className={s.header}>
        <Text title={t('Профиль')} />
        <Button className={s.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>

      <div className={s.data}>
        <Input
          value     = {data?.firstname}
          label     = {t('Ваше имя')}
          className = {s.input}
        />
        <Input
          value     = {data?.lastname}
          label     = {t('Ваша фамилия')}
          className = {s.input}
        />
      </div>
    </div>
  )
};
