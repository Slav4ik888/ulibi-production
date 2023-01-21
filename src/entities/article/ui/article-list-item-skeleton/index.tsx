import { FC } from 'react';
import { cn } from 'shared/lib';
import { Card, Skeleton } from 'shared/ui';
import { ArticlesView } from '../../model/types';
import s from './index.module.scss';



interface Props {
  className? : string
  view?      : ArticlesView
}


export const ArticleListItemSkeleton: FC<Props> = ({ className, view }) => {
  if (view === ArticlesView.LIST) {
    return (
      <Card className={cn(s.root, {}, [s.BIG, className])}>
        <div className={s.header}>
          <Skeleton width={30} height={30} borderRadius='50%' />
          <Skeleton width={150} height={16} className={s.username} />
          <Skeleton width={150} height={16} className={s.date} />
        </div>
        <Skeleton width={250} height={24} />
        <Skeleton width='100%' height={200} className={s.img} />
        <div className={s.footer}>
          <Skeleton width={200} height={36} />
        </div>
      </Card>
    )
  }

  return (
    <Card className = {cn(s.root, {}, [s.SMALL, className])}>
      <div className={s.imageWrapper}>
        <Skeleton width={200} height={200} className={s.img} />
      </div>
      <div className={s.infoWrapper}>
        <Skeleton width={130} height={16} />
      </div>
      <Skeleton width={150} height={16} className={s.title} />
    </Card>
  )
};
