import { ArticlesView } from 'entities/article';
import { StateSchemaArticlesPage } from 'pages/articles-page';
import { MOCK_ARTICLE } from '../article';


export const STATE_ARTICLES_PAGE: StateSchemaArticlesPage = {
  entities : {
    [MOCK_ARTICLE.id]: MOCK_ARTICLE
  },
  ids      : [MOCK_ARTICLE.id],
  loading  : false,
  error    : '',
  view     : ArticlesView.LIST,
  page     : 1,
  limit    : 2,
  hasMore  : true
};

export const STATE_ARTICLES_PAGE_EMPTY_DATA: StateSchemaArticlesPage = {
  entities : {},
  ids      : [],
  loading  : false,
  error    : '',
  view     : ArticlesView.LIST,
  page     : 1,
  limit    : 2,
  hasMore  : true
};
