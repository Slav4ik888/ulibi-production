import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/page-wrapper';
import s from './index.module.scss';


export const NotFoundPage = memo(() => {
  const { t } = useTranslation('not-found');

  return (
    <PageWrapper className={s.root}>
      {t('Страница не найдена')}
    </PageWrapper>
  )
});
