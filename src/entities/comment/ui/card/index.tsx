import { CommentType } from '../../model';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import s from './index.module.scss';
import { AppLink, Avatar, Skeleton, Text, TextSize } from 'shared/ui';
import { RoutePath } from 'app/providers/router/config';



interface Props {
  className?: string
  comment?: CommentType
  loading?: boolean
}


export const CommentCard = memo(({ className, comment, loading }: Props) => {
  const { t } = useTranslation();

  if (loading) return (
    <div className={cn(s.root, {}, [className, s.loading])}>
      <div className={s.header}>
        <Skeleton width={30} height={30} borderRadius='50%' className={s.skeleton} />
        <Skeleton width={130} height={30} className={s.skeleton} />
      </div>
      <Skeleton width='100%' height={60} className={s.skeleton} />
    </div>
  )

  if (!comment) return null;


  return (
    <div className={cn(s.root, {}, [className])}>
      <AppLink to={`${RoutePath.PROFILE}/${comment?.user?.id}`} className={s.header}>
        <Avatar size={30} src={comment?.user?.avatar || ''} />
        <Text
          size={TextSize.S}
          title={comment?.user?.username}
          className={s.username}
        />
      </AppLink>
      <Text
        text={comment?.message}
        className={s.text}
      />
    </div>
  )
});
