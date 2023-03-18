import { Article } from './article';


export interface StateSchemaArticle {
  loading : boolean
  error?  : string
  data?   : Article
}
