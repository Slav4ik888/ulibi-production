import { FC, useCallback } from 'react';
import { RoutePath } from 'app/providers/router/config';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { IconWrapper, Text, Card, TextSize, Avatar, Button, ButtonTheme } from 'shared/ui';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { useHover } from 'shared/lib/hooks';
import { ArticleTextBlockComponent } from '../article-text-block';
import s from './index.module.scss';



interface Props {
  className? : string
  article    : Article
  view       : ArticleView
}


export const ArticleListItem: FC<Props> = ({ className, article, view }) => {
  const
    { t } = useTranslation('article'),
    [isHover, bindHover] = useHover(),
    types = <Text text={article.type.join(', ')} className={s.types} />,
    views = (
      <>
        <Text text={String(article.views)} className={s.views} />
        <IconWrapper Svg={EyeIcon} />
      </>
    ),
    navigate = useNavigate(),
    handlerOpenArticle = useCallback(() => {
      navigate(`${RoutePath.ARTICLES_DETAILS}/${article.id}`);
    }, [article.id, navigate]);


  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <Card className={cn(s.root, {}, [s.big, className])}>
        <div className={s.header}>
          <Avatar size={30} src={article.user?.avatar || ''} />
          <Text text={article.user.username} className={s.username} />
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
          <Button
            theme   = {ButtonTheme.SIMPLE}
            onClick = {handlerOpenArticle}
          >
            {t('???????????? ??????????...')}
          </Button>
          {views}
        </div>
      </Card>
    )
  }

  return (
    <Card
      {...bindHover}
      className = {cn(s.root, {}, [s.small, className])}
      onClick   = {handlerOpenArticle}
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
  )
};
