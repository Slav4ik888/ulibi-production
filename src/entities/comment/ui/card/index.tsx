import { CommentType } from '../../model';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import s from './index.module.scss';
import { Avatar, Skeleton, Text, TextSize } from 'shared/ui';



interface Props {
  className? : string
  comment?   : CommentType
  loading?   : boolean
}


export const CommentCard = memo(({ className, comment, loading }: Props) => {
  const { t } = useTranslation();

  if (loading) return (
    <div className={cn(s.root, {}, [className])}>
      <div className={s.header}>
        <Skeleton width={30} height={30} borderRadius='50%' className={s.skeleton} />
        <Skeleton width={130} height={30} className={s.skeleton} />
      </div>
      <Skeleton width='100%' height={60} className={s.skeleton} />
    </div>
  )

  return (
    <div className={cn(s.root, {}, [className])}>
      <div className={s.header}>
        <Avatar size={30} src={comment?.user?.avatar || ''} />
        <Text
          size      = {TextSize.S}
          title     = {comment?.user?.username}
          className = {s.username}
        />
      </div>
      <Text
        text      = {comment?.message}
        className = {s.text}
      />
    </div>
  )
});
