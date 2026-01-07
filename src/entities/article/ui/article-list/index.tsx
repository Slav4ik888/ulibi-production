import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { Text } from 'shared/ui';
import { Article, ArticlesView } from '../../model/types';
import { ArticleListItem } from '../article-list-item';
import { ArticleListItemSkeleton } from '../article-list-item-skeleton';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/page-wrapper';
import s from './index.module.scss';


const getSkeletons = (view: ArticlesView) => new Array(view === 'TILE' ? 9 : 3)
  .fill(0)
  .map((_, idx) => <ArticleListItemSkeleton
    key       = {idx}
    view      = {view}
    className = {s.card}
  />);


export interface Props {
  className?   : string
  articles     : Article[]
  loading?     : boolean
  view?        : ArticlesView
  target?      : HTMLAttributeAnchorTarget
  virtualized? : boolean
}


export const ArticleList: FC<Props> = ({
  className, loading, target,
  articles    = [],
  virtualized = true,
  view        = 'TILE',
}) => {
  const { t } = useTranslation('article');

  const
    isList      = view === 'LIST',
    itemsPerRow = isList ? 1 : 3, // ref.currentWidth / ITEM_WIDTH;
    rowCount    = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);


  const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
    const
      items     = [],
      fromIndex = index * itemsPerRow,
      toIndex   = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          article   = {articles[i]}
          view      = {view}
          target    = {target}
          className = {s.card}
          key       = {articles[i].id}
        />
      )
    }


    return (
      <div
        key       = {key}
        style     = {style}
        className = {s.row}
      >
        {items}
      </div>
    );
  };


  if (! loading && ! articles.length) {
    return (
      <div className={cn(s.root, {}, [s[view], className])}>
        <Text title={t('Статья не найдена')} />
      </div>
    )
  }

  return (
    <WindowScroller
      // eslint-disable-next-line no-console
      onScroll      = {() => console.log('Scroller nuh')}
      scrollElement = {document.getElementById(PAGE_ID) as Element}
    >
      {
        ({
          width,
          height,
          isScrolling,
          scrollTop,
          onChildScroll,
          registerChild
        }) => (
          <div
            // @ts-ignore
            ref       = {registerChild}
            className = {cn(s.root, {}, [s[view], className])}
          >
            {
              virtualized
                ? (
                  <List
                    // ref="List"
                    // className={styles.List}
                    autoHeight
                    height      = {height ?? 700}
                    width       = {width ? width - 80 : 700}
                    rowCount    = {rowCount}
                    rowHeight   = {isList ? 700 : 330} // useDynamicRowHeight ? this._getRowHeight : listRowHeight
                    rowRenderer = {rowRender}
                    isScrolling = {isScrolling}
                    scrollTop   = {scrollTop}
                    // scrollToIndex={scrollToIndex}
                    onScroll    = {onChildScroll}
                  />
                )
                : (
                  articles.map(item => (
                    <ArticleListItem
                      key       = {item.id}
                      article   = {item}
                      view      = {view}
                      className = {s.card}
                    />
                  ))
                )
            }
            {loading && getSkeletons(view)}
          </div>
        )
      }
    </WindowScroller>
  )
};
