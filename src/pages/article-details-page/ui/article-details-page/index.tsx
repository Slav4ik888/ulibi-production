import { ArticleComponent } from 'entities/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { PageWrapper } from 'widgets/page-wrapper';
import { articleDetailsPageReducer } from '../../model/slice/article-details-reducer';
import { ArticlePageDetailsHeader } from '../header';
import { VStack } from 'shared/ui/stack';
import { ArticleRecommendationsList } from 'features/article-recommendations-list';
import { ArticleDetailsComments } from '../article-details-comments';



const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};


const ArticlePageDetails = memo(() => {
  const
    { t } = useTranslation('article'),
    { id } = useParams<{ id: string }>();
    // comments = useSelector(selectArticleComments.selectAll),
    // loading = useSelector(selectArticleDetailsCommentsLoading);

  // useInitialEffect(() => {
  //   dispatch(fetchCommentsByArticleId(id));
  //   dispatch(fetchRecommendationsByArticleId());
  // });


  if (!id) return (
    <div>{t('Статья не найдена')}</div>
  );


  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper>
        <VStack fullWidth gap='16'>
          <ArticlePageDetailsHeader />
          <ArticleComponent id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </PageWrapper>
    </DynamicModuleLoader>
  )
});

export default ArticlePageDetails;
