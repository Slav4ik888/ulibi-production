import { StateSchemaArticleDetailsComments } from './state-schema-article-details';
import { StateSchemaArticleDetailsRecommendations } from './state-schema-recommendations';

export interface StateSchemaArticleDetailsPage {
  comments        : StateSchemaArticleDetailsComments
  recommendations : StateSchemaArticleDetailsRecommendations
}
