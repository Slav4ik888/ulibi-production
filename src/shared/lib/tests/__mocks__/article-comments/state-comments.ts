import { StateSchemaArticleDetailsComments } from 'pages/article-details-page';
import { COMMENTS, COMMENT_ONE, COMMENT_TWO } from '.';


export const STATE_ARTICLE_COMMENTS: StateSchemaArticleDetailsComments = {
  loading  : false,
  error    : '',
  ids      : [...COMMENTS.map(c => c.id)],
  entities : {
    [COMMENT_ONE.id]: COMMENT_ONE,
    [COMMENT_TWO.id]: COMMENT_TWO
  }
};


export const STATE_ARTICLE_COMMENTS_EMPTY_DATA: StateSchemaArticleDetailsComments = {
  loading  : false,
  error    : '',
  ids      : [],
  entities : {}
};
