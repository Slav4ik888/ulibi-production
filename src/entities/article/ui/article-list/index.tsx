import { FC } from 'react';
import { cn } from 'shared/lib';
import { Article, ArticlesView } from '../../model/types';
import { ArticleListItem } from '../article-list-item';
import { ArticleListItemSkeleton } from '../article-list-item-skeleton';
import s from './index.module.scss';



const getSkeletons = (view: ArticlesView) => new Array(view === ArticlesView.TILE ? 9 : 3)
  .fill(0)
  .map((_, idx) => <ArticleListItemSkeleton
    key       = {idx}
    view      = {view}
    className = {s.card}
  />);


export interface Props {
  className? : string
  articles   : Article[]
  loading?   : boolean
  view?      : ArticlesView
}


export const ArticleList: FC<Props> = ({
  className, articles, loading,
  view = ArticlesView.TILE
}) => {
  if (loading) return <div className = {cn(s.root, {}, [s.small, className])}>
    {getSkeletons(view)}
  </div>;

  const renderArticle = (article: Article) => <ArticleListItem
    key       = {article.id}
    article   = {article}
    view      = {view}
    className = {s.card}
  />;

  return (
    <div className={cn(s.root, {}, [s[view], className])}>
      {
        articles?.length > 0
          ? articles.map(renderArticle)
          : null
      }
    </div>
  )
};
