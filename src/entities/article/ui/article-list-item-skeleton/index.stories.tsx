import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ArticleView } from '../../model/types';
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
  view: ArticleView.SMALL
};

export const ViewBig = Template.bind({});
ViewBig.args = {
  view: ArticleView.BIG
};

// DARK THEME
export const ViewSmallDark = Template.bind({});
ViewSmallDark.args = {
  view: ArticleView.SMALL
};
ViewSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ViewBigDark = Template.bind({});
ViewBigDark.args = {
  view: ArticleView.BIG
};
ViewBigDark.decorators = [ThemeDecorator(Theme.DARK)];


// ORANGE THEME
export const ViewSmallOrange = Template.bind({});
ViewSmallOrange.args = {
  view: ArticleView.SMALL
};
ViewSmallOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];

export const ViewBigOrange = Template.bind({});
ViewBigOrange.args = {
  view: ArticleView.BIG
};
ViewBigOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];
