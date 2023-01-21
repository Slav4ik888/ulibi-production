import { ArticlesView } from 'entities/article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import ListIcon from 'shared/assets/icons/list.svg';
import TileIcon from 'shared/assets/icons/tile.svg';
import { cn } from 'shared/lib';
import { Button, ButtonTheme, IconWrapper } from 'shared/ui';
import s from './index.module.scss';


const viewTypes = [
  {
    view: ArticlesView.TILE,
    icon: TileIcon
  },
  {
    view: ArticlesView.LIST,
    icon: ListIcon
  }
]


interface Props {
  view       : ArticlesView,
  classname? : string
  onToggle   : (view: ArticlesView) => void
}


export const ArticleToggleViewSelector: FC<Props> = memo(({ view, classname, onToggle }: Props) => {
  const
    { t } = useTranslation(),
    handlerToggle = (newView: ArticlesView) => () => onToggle(newView);


  return (
    <div className={s.root}>
      {
        viewTypes.map(viewType => (
          <Button
            key       = {viewType.view}
            theme     = {ButtonTheme.CLEAR}
            onClick   = {handlerToggle(viewType.view)}
          >
            <IconWrapper Svg={viewType.icon} className={cn(s.icon, { [s.selected]: viewType.view === view })} />
          </Button>
        ))
      }
    </div>
  )
});
