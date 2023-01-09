import { Article, StateArticleDetails } from 'entities/article';
import { MOCK_ARTICLE } from '.';


export const STATE_ARTICLE: StateArticleDetails = {
  data     : MOCK_ARTICLE,
  loading  : false,
  error    : ''
};

export const STATE_ARTICLE_EMPTY_DATA: StateArticleDetails = {
  data     : {} as Article,
  loading  : false,
  error    : ''
};
