import { RoutePath } from 'app/providers/router/config';
import { selectIsCanEditArticle } from '../../model/selectors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cn } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';
import s from './index.module.scss';
import { selectArticleData } from 'entities/article';
import { HStack } from 'shared/ui/stack';



interface Styles {
  root?  : string
}


interface Props {
  styles?: Styles
}


export const ArticlePageDetailsHeader = memo(({ styles = {} }: Props) => {
  const
    { t } = useTranslation('article'),
    navigate = useNavigate(),
    article = useSelector(selectArticleData),
    isCanEdit = useSelector(selectIsCanEditArticle);


  const handlerBackToList = useCallback(() => {
    navigate(RoutePath.ARTICLES);
  }, [navigate]);

  const handlerEditArticle = useCallback(() => {
    navigate(`${RoutePath.ARTICLE_DETAILS}/${article?.id}/edit`);
  }, [article?.id, navigate]);


  return (
    <HStack fullWidth gap='16' className={cn('', {}, [styles.root])}>
      <Button theme={ButtonTheme.SIMPLE} onClick={handlerBackToList}>
        {t('Назад к списку')}
      </Button>
      {
        isCanEdit && (
          <Button
            className = {s.editBtn}
            theme     = {ButtonTheme.SIMPLE}
            onClick   = {handlerEditArticle}
          >
            {t('Редактировать')}
          </Button>
        )
      }
    </HStack>
  )
});
