import { CommentType } from '../../model';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { CommentCard } from '../card';
import { Text } from 'shared/ui';
import s from './index.module.scss';



interface Props {
  className? : string
  comments?  : CommentType[]
  loading?   : boolean
}


export const CommentsList: FC<Props> = ({ className, comments, loading }) => {
  const { t } = useTranslation('comments');

  return (
    <div className={cn(s.root, {}, [className])}>
      {
        comments?.length
          ? comments.map(comment => (
            <CommentCard
              key       = {comment.id}
              comment   = {comment}
              loading   = {loading}
              className = {s.comment}
            />
          ))
          : <Text text={t('Комментарии отсутствуют')} />
      }
    </div>
  )
};
