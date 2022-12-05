import { Article, StateArticleDetails } from 'entities/article';
import { ARTICLE } from '.';


export const STATE_ARTICLE: StateArticleDetails = {
  data     : ARTICLE,
  loading  : false,
  error    : ''
};

export const STATE_ARTICLE_EMPTY_DATA: StateArticleDetails = {
  data     : {} as Article,
  loading  : false,
  error    : ''
};
