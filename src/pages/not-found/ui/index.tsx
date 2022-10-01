import { useTranslation } from 'react-i18next';
import s from './index.module.scss';


export const NotFoundPage = () => {
  const { t } = useTranslation('not-found');

  return (
    <div className={s.root}>
      {t('Страница не найдена')}
    </div>
  )
};
