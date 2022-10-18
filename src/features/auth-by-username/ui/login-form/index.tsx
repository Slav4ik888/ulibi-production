import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';
import { Input } from 'shared/ui/input';
import s from './index.module.scss';



interface Props {
  className?: string
}


export const LoginForm: FC<Props> = ({ className }) => {
  const
    { t } = useTranslation();

  // const handlerChange = (value: string) => setValue(value);

  return (
    <div className={cn(s.root, {}, [className])}>
      <Input
        autofocus
        className = {s.input}
        label     = {t('Введите username')}
        // onChange  = {handlerChange}
      />
      <Input
        className = {s.input}
        label     = {t('Введите пароль')}
        // onChange  = {handlerChange}
      />
      <Button
        className={s.btn}
        theme={ButtonTheme.SIMPLE}
      >
        {t('Войти')}
      </Button>
    </div>
  )
};

LoginForm.defaultProps = {
  className: ''
};
