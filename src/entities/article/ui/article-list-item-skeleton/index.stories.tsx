import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ArticlesView } from '../../model/types';
import { ThemeDecorator } from 'shared/config/storybook';
import { ArticleListItemSkeleton } from '.';


export default {
  title     : 'article/ArticleListItemSkeleton',
  component : ArticleListItemSkeleton,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleListItemSkeleton>;


const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => <ArticleListItemSkeleton {...args} />;

// LIGHT THEME
export const ViewSmall = Template.bind({});
ViewSmall.args = {
  view: ArticlesView.TILE
};

export const ViewBig = Template.bind({});
ViewBig.args = {
  view: ArticlesView.LIST
};

// DARK THEME
export const ViewSmallDark = Template.bind({});
ViewSmallDark.args = {
  view: ArticlesView.TILE
};
ViewSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ViewBigDark = Template.bind({});
ViewBigDark.args = {
  view: ArticlesView.LIST
};
ViewBigDark.decorators = [ThemeDecorator(Theme.DARK)];


// ORANGE THEME
export const ViewSmallOrange = Template.bind({});
ViewSmallOrange.args = {
  view: ArticlesView.TILE
};
ViewSmallOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];

export const ViewBigOrange = Template.bind({});
ViewBigOrange.args = {
  view: ArticlesView.LIST
};
ViewBigOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];
