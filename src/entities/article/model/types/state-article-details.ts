import { Article } from './article';


export interface StateArticleDetails {
  loading : boolean
  error?  : string
  data?   : Article
}
