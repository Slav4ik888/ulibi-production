import { Article, StateSchemaArticle } from 'entities/article';
import { MOCK_ARTICLE } from '.';


export const STATE_ARTICLE: StateSchemaArticle = {
  data     : MOCK_ARTICLE,
  loading  : false,
  error    : ''
};

export const STATE_ARTICLE_EMPTY_DATA: StateSchemaArticle = {
  data     : {} as Article,
  loading  : false,
  error    : ''
};
