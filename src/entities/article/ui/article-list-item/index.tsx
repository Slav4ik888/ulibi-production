import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { IconWrapper, Text, Card, TextSize } from 'shared/ui';
import { Article, ArticleView } from '../../model/types';
import EyeIcon from 'shared/assets/icons/eye.svg';
import s from './index.module.scss';
import { useHover } from 'shared/lib/hooks';



interface Props {
  className? : string
  article    : Article
  view?      : ArticleView
}


export const ArticleListItem: FC<Props> = ({ className, article, view }) => {
  const
    { t } = useTranslation(),
    [isHover, bindHover] = useHover();


  if (view === ArticleView.BIG) {
    return (
      <div className={cn(s.root, {}, [s.big, className])}>
        {
          article.title
        }
      </div>
    )
  }

  return (
    <Card
      {...bindHover}
      className={cn(s.root, {}, [s.small, className])}
    >
      <div className={s.imageWrapper}>
        <img src={article.img} className={s.img} alt={article.title} />
        <Text size={TextSize.S} text={article.createdAt} className={s.date} />
      </div>
      <div className={s.infoWrapper}>
        <Text text={article.type.join(', ')} className={s.types} />
        <Text text={String(article.views)} className={s.views} />
        <IconWrapper Svg={EyeIcon} />
      </div>
      <Text text={article.title} className={s.title} />
    </Card>
  )
};
