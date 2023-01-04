import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { Article, ArticleView } from '../../model/types';
import { ArticleListItem } from '../article-list-item';
import s from './index.module.scss';



interface Props {
  className? : string
  articles   : Article[]
  loading?   : boolean
  view?      : ArticleView
}


export const ArticleList: FC<Props> = ({
  className, articles, loading,
  view = ArticleView.SMALL
}) => {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => <ArticleListItem
    key={article.id}
    article={article}
    view={view}
  />;

  return (
    <div className={cn(s.root, {}, [className])}>
      {
        articles?.length > 0
          ? articles.map(renderArticle)
          : null
      }
    </div>
  )
};
