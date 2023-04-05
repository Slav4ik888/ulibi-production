import { FC, HTMLAttributeAnchorTarget } from 'react';
import { RoutePath } from 'app/providers/router/config';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { IconWrapper, Text, Card, TextSize, Avatar, Button, ButtonTheme, AppLink } from 'shared/ui';
import { Article, ArticleBlockType, ArticleTextBlock, ArticlesView } from '../../model/types';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { useHover } from 'shared/lib/hooks';
import { ArticleTextBlockComponent } from '../article-text-block';
import s from './index.module.scss';



interface Props {
  className? : string
  article    : Article
  view       : ArticlesView
  target?    : HTMLAttributeAnchorTarget
}


export const ArticleListItem: FC<Props> = ({ className, article, view, target }) => {
  const
    { t } = useTranslation('article'),
    [isHover, bindHover] = useHover(),
    types = <Text text={article.type.join(', ')} className={s.types} />,
    views = (
      <>
        <Text text={String(article.views)} className={s.views} />
        <IconWrapper Svg={EyeIcon} />
      </>
    );


  if (view === ArticlesView.LIST) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <Card className={cn(s.root, {}, [s.LIST, className])}>
        <div className={s.header}>
          <Avatar size={30} src={article.user?.avatar || ''} />
          <Text text={article.user?.username} className={s.username} />
          <Text text={article.createdAt} className={s.date} />
        </div>
        <Text title={article.title} className={s.title} />
        {
          types
        }
        <img src={article.img} className={s.img} alt={article.title} />
        {
          textBlock && <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />
        }
        <div className={s.footer}>
          <AppLink
            target = {target}
            to     = {`${RoutePath.ARTICLE_DETAILS}/${article.id}`}
          >
            <Button theme={ButtonTheme.SIMPLE}>
              {t('Читать далее...')}
            </Button>
          </AppLink>
          {views}
        </div>
      </Card>
    )
  }

  return (
    <AppLink
      target = {target}
      to     = {`${RoutePath.ARTICLE_DETAILS}/${article.id}`}
    >
      <Card
        {...bindHover}
        className = {cn(s.root, {}, [s.TILE, className])}
      >
        <div className={s.imageWrapper}>
          <img src={article.img} className={s.img} alt={article.title} />
          <Text size={TextSize.S} text={article.createdAt} className={s.date} />
        </div>
        <div className={s.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={s.title} />
      </Card>
    </AppLink>
  )
};
