/* eslint-disable max-len */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from 'entities/article';
import { MOCK_ARTICLE } from 'shared/lib/tests/__mocks__';



const ArticlePage = memo(() => {
  const { t } = useTranslation('article');


  return (
    <div>
      <ArticleList
        view={ArticleView.BIG}
        articles={
          new Array(16)
            .fill(0)
            .map((_, idx) => ({
              ...MOCK_ARTICLE,
              id: String(idx)
            }))
        }
      />
    </div>
  )
});

export default ArticlePage;
