import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui';
import s from './index.module.scss';



interface Props {
  className?: string
}


export const PageError: FC<Props> = ({ className }) => {
  const { t } = useTranslation('errors');

  const handlerReloadPage = () => {
    location.reload();
  };

  return (
    <div className={cn(s.root, {}, [className])}>
      <p>{t('Прошла непредвиденная ошибка')}</p>
      <Button
        theme   = {ThemeButton.SIMPLE}
        onClick = {handlerReloadPage}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  )
};

PageError.defaultProps = {
  className: ''
}
