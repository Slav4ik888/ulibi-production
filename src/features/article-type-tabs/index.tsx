import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleType } from 'entities/article';
import { TabItem, Tabs } from 'shared/ui/tabs';



interface Styles {
  root?  : string
}


interface Props {
  type         : ArticleType
  styles?      : Styles
  onChangeType : (tab: TabItem<ArticleType>) => void
}


export const ArticleTypeTabs = memo(({ type, styles = {}, onChangeType }: Props) => {
  const
    { t } = useTranslation('article')

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: 'ALL',
      content: t('Все')
    },
    {
      value: 'Desing',
      content: t('Дизайн')
    },
    {
      value: 'Economic',
      content: t('Экономика')
    },
    {
      value: 'IT',
      content: t('Айти')
    },
    {
      value: 'Science',
      content: t('Наука')
    }
  ], [t]);

  // const handlerChangeType = useCallback((tab: TabItem) => {
  //   onChangeType(tab.value as ArticleType);
  // }, [onChangeType]);


  return (
    <Tabs
      tabs       = {typeTabs}
      value      = {type}
      styles     = {styles}
      onTabClick = {onChangeType}
    />
  )
});
