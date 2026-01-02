import { User } from 'entities/user/model';


export type ArticleSortField = 'views' | 'title' | 'createdAt'

export type ArticlesView = 'LIST' | 'TILE'

export type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE'


export interface ArticleBlockBase {
  id   : string
  type : ArticleBlockType
}


export interface ArticleTextBlock extends ArticleBlockBase {
  type       : 'TEXT'
  title?     : string
  paragraphs : string[]
}


export interface ArticleCodeBlock extends ArticleBlockBase {
  type : 'CODE'
  code : string
}


export interface ArticleImageBlock extends ArticleBlockBase {
  type  : 'IMAGE'
  title : string
  src   : string
}


export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock


export type ArticleType = 'ALL' | 'IT' | 'Desing' | 'Science' | 'Economic'


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
