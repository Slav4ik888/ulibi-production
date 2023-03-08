import { User } from 'entities/user/model';


export enum ArticleSortField {
  VIEWS   = 'views',
  TITLE   = 'title',
  CREATED = 'createdAt'
}

export enum ArticlesView {
  LIST = 'LIST',
  TILE = 'TILE'
}


export enum ArticleBlockType {
  TEXT  = 'TEXT',
  CODE  = 'CODE',
  IMAGE = 'IMAGE'
}


export interface ArticleBlockBase {
  id   : string
  type : ArticleBlockType
}


export interface ArticleTextBlock extends ArticleBlockBase {
  type       : ArticleBlockType.TEXT
  title?     : string
  paragraphs : string[]
}


export interface ArticleCodeBlock extends ArticleBlockBase {
  type : ArticleBlockType.CODE
  code : string
}


export interface ArticleImageBlock extends ArticleBlockBase {
  type  : ArticleBlockType.IMAGE
  title : string
  src   : string
}


export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock


export enum ArticleType {
  ALL        = 'ALL',
  IT         = 'IT',
  DESING     = 'Desing',
  SCIENCE    = 'Science',
  ECOMNOMICS = 'Economic'
}


export interface Article {
  id        : string
  title     : string
  subtitle  : string
  img       : string
  views     : number
  createdAt : string
  user      : User
  type      : ArticleType[]
  blocks    : ArticleBlock[]
}
