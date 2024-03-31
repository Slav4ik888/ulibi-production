import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks';
import { cn } from 'shared/lib';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui';
import { useSelector } from 'react-redux';
import { selectAddCommentFormComment } from '../../model/selectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { HStack } from 'shared/ui/stack';



const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}


export interface Props {
  className?    : string
  onSendComment : (v: string) => void
}


const AddCommentForm = memo(({ className, onSendComment }: Props) => {
  const
    { t }    = useTranslation('comments'),
    dispatch = useAppDispatch(),
    message  = useSelector(selectAddCommentFormComment);

  const handlerCommentChange = useCallback((v: string) => {
    dispatch(addCommentFormActions.setComment(v));
  }, [dispatch]);

  const handlerSendComment = useCallback(() => {
    handlerCommentChange('');
    onSendComment(message);
  }, [onSendComment, handlerCommentChange, message]);


  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack fullWidth className={cn('', {}, [className])}>
        <Input
          placeholder = {t('Введите текст комментария')}
          value       = {message}
          onChange    = {handlerCommentChange}
        />
        <Button
          children={t('Отправить')}
          onClick = {handlerSendComment}
        />
      </HStack>
    </DynamicModuleLoader>
  )
});

export default AddCommentForm
