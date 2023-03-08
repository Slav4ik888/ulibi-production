import { FC, memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks';
import { ArticleSortField } from 'entities/article';
import { Select, SelectOption } from 'shared/ui';
import { SortOrder } from 'shared/types';
import s from './index.module.scss';



interface Styles {
  root?  : string
}


interface Props {
  sort          : ArticleSortField
  onChangeSort  : (newSort: ArticleSortField) => void
  order         : SortOrder
  onChangeOrder : (newOrder: SortOrder) => void
  styles?       : Styles
}


export const ArticleSortSelector = memo(({ sort, onChangeSort, order, onChangeOrder,  styles = {} }: Props) => {
  const
    { t }    = useTranslation('article');
    // dispatch = useAppDispatch(),
    // view = useSelector(selectArticlesPageView);

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value   : 'asc',
      content : t('возрастанию')
    },
    {
      value   : 'desc',
      content : t('убыванию')
    }
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value   : ArticleSortField.CREATED,
      content : t('дате создания')
    },
    {
      value   : ArticleSortField.TITLE,
      content : t('заголовку')
    },
    {
      value   : ArticleSortField.VIEWS,
      content : t('просмотрам')
    }
  ], [t]);


  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <Select
        label     = {t('Сортировать по')}
        options   = {sortFieldOptions}
        value     = {sort}
        onChange  = {onChangeSort}
      />
      <Select
        label     = {t('по')}
        options   = {orderOptions}
        value     = {order}
        className = {s.order}
        onChange  = {onChangeOrder}
      />
    </div>
  )
});
