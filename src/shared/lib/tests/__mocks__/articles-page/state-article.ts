import { ArticlesView } from 'entities/article';
import { ArticlesPageSchema } from 'pages';
import { MOCK_ARTICLE } from '../article';


export const STATE_ARTICLES_PAGE: ArticlesPageSchema = {
  entities : {
    [MOCK_ARTICLE.id]: MOCK_ARTICLE
  },
  ids      : [MOCK_ARTICLE.id],
  loading  : false,
  error    : '',
  view     : ArticlesView.LIST
};

export const STATE_ARTICLES_PAGE_EMPTY_DATA: ArticlesPageSchema = {
  entities : {},
  ids      : [],
  loading  : false,
  error    : '',
  view     : ArticlesView.LIST
};
