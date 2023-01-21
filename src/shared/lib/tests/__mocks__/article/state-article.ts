import { Article, ArticleDetailsSchema } from 'entities/article';
import { MOCK_ARTICLE } from '.';


export const STATE_ARTICLE: ArticleDetailsSchema = {
  data     : MOCK_ARTICLE,
  loading  : false,
  error    : ''
};

export const STATE_ARTICLE_EMPTY_DATA: ArticleDetailsSchema = {
  data     : {} as Article,
  loading  : false,
  error    : ''
};
