import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks';
import { articleDetailsReducer } from '../../model/slice';
import { fetchArticleById } from '../../model/services';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { useSelector } from 'react-redux';
import {
  selectArticleDetailsData, selectArticleDetailsError, selectArticleDetailsLoading
} from '../../model/selectors';
import s from './index.module.scss';
import { Avatar, IconWrapper, Skeleton, Text, TextAlign, TextSize } from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ArticleBlock, ArticleBlockType } from '../../model/types';
import { ArticleImageBlockComponent } from '../article-image-block';
import { ArticleCodeBlockComponent } from '../article-code-block';
import { ArticleTextBlockComponent } from '../article-text-block';



const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}


interface Props {
  id         : string
  className? : string
}


export const ArticleDetails = memo(({ id, className }: Props) => {
  const
    { t }    = useTranslation('article'),
    dispatch = useAppDispatch(),
    article  = useSelector(selectArticleDetailsData),
    loading  = useSelector(selectArticleDetailsLoading),
    error    = useSelector(selectArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} className={s.block} />;

      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} className={s.block} />;

      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} className={s.block} />;


      default: return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (loading) {
    content = (
      <>
        <Skeleton className={s.avatar} width={100} height={100} borderRadius='50%' />
        <Skeleton className={s.title} width={400} height={32} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width='100%' height={200} />
        <Skeleton className={s.skeleton} width='100%' height={200} />
        <Skeleton className={s.skeleton} width='100%' height={200} />
      </>
    )
  }
  else if (error) {
    content = (
      <Text
        align = {TextAlign.CENTER}
        title = {t('Ошибка при загрузке статьи')}
      />
    )
  }
  else {
    content = (
      <>
        <div className={s.avatarWrapper}>
          <Avatar
            size      = {200}
            src       = {article?.img || ''}
            alt       = {t('Аватарка')}
            className = {s.avatar}
          />
        </div>
        <Text
          title = {article?.title}
          text  = {article?.subtitle}
          className = {s.title}
        />
        <div className={s.articleInfo}>
          <IconWrapper Svg={EyeIcon} className={s.icon} />
          <Text
            text = {String(article?.views)}
            size = {TextSize.S}
          />
        </div>
        <div className={s.articleInfo}>
          <IconWrapper Svg={CalendarIcon} className={s.icon} />
          <Text
            text = {article?.createdAt}
            size = {TextSize.S}
          />
        </div>
        {
          article?.blocks.map(renderBlock)
        }
      </>
    )
  }


  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(s.root, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
});
