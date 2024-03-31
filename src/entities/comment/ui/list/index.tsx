import { CommentType } from '../../model';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { CommentCard } from '../card';
import { Text } from 'shared/ui';
import { VStack } from 'shared/ui/stack';



interface Props {
  className? : string
  comments?  : CommentType[]
  loading?   : boolean
}


export const CommentsList: FC<Props> = ({ className, comments, loading }) => {
  const { t } = useTranslation('comments');

  if (loading) return (
    <VStack fullWidth>
      <CommentCard loading />
      <CommentCard loading />
      <CommentCard loading />
    </VStack>
  )

  return (
    <VStack gap='16' fullWidth className={cn('', {}, [className])}>
      {
        comments?.length
          ? comments.map(comment => (
            <CommentCard
              key       = {comment.id}
              comment   = {comment}
              loading   = {loading}
            />
          ))
          : <Text text={t('Комментарии отсутствуют')} />
      }
    </VStack>
  )
};
