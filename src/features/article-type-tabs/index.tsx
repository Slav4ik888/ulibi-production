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
      value: ArticleType.ALL,
      content: t('Все')
    },
    {
      value: ArticleType.DESING,
      content: t('Дизайн')
    },
    {
      value: ArticleType.ECOMNOMICS,
      content: t('Экономика')
    },
    {
      value: ArticleType.IT,
      content: t('Айти')
    },
    {
      value: ArticleType.SCIENCE,
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
