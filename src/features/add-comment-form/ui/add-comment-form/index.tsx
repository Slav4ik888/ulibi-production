import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks';
import { cn } from 'shared/lib';
import s from './index.module.scss';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui';
import { useSelector } from 'react-redux';
import { selectAddCommentFormComment } from '../../model/selectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';



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
      <div className={cn(s.root, {}, [className])}>
        <Input
          placeholder = {t('Введите текст комментария')}
          value       = {message}
          className   = {s.comment}
          onChange    = {handlerCommentChange}
        />
        <Button
          children={t('Отправить')}
          onClick = {handlerSendComment}
        />
      </div>
    </DynamicModuleLoader>
  )
});

export default AddCommentForm
