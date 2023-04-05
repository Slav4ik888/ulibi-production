import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { cn } from 'shared/lib';
import { PageWrapper } from 'widgets/page-wrapper';
import s from './index.module.scss';



interface Styles {
  root?  : string
}


interface Props {
  styles?: Styles
}


const ArticleEditPage = memo(({ styles = {} }: Props) => {
  const
    { t } = useTranslation(),
    { id } = useParams<{ id: string }>(),
    isEdit = Boolean(id);

  return (
    <PageWrapper className={cn(s.root, {}, [styles.root])}>
      {
        isEdit
          ? t('Редактирование статьи с ID = ') + id
          : t('Добавление новой статьи')
      }
    </PageWrapper>
  )
});

export default ArticleEditPage
