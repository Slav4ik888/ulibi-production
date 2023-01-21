import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ArticlesView } from '../../model/types';
import { ThemeDecorator } from 'shared/config/storybook';
import { MOCK_ARTICLE } from 'shared/lib/tests/__mocks__';
import { ArticleList } from '.';


export default {
  title     : 'article/ArticleList',
  component : ArticleList,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleList>;


const
  Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />,
  articles = [MOCK_ARTICLE, MOCK_ARTICLE, MOCK_ARTICLE, MOCK_ARTICLE, MOCK_ARTICLE, MOCK_ARTICLE],
  small = {
    articles,
  },
  big = {
    articles,
    view: ArticlesView.LIST
  },
  withLoadingSmall = {
    loading: true
  },
  withLoadingBig = {
    loading: true,
    view: ArticlesView.LIST
  }


// LIGHT THEME
export const ViewSmall = Template.bind({});
ViewSmall.args = small;

export const ViewBig = Template.bind({});
ViewBig.args = big;

export const LoadingSmall = Template.bind({});
LoadingSmall.args = withLoadingSmall;

export const LoadingBig = Template.bind({});
LoadingBig.args = withLoadingBig;


// DARK THEME
export const ViewSmallDark = Template.bind({});
ViewSmallDark.args = small;
ViewSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ViewBigDark = Template.bind({});
ViewBigDark.args = big;
ViewBigDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingSmallDark = Template.bind({});
LoadingSmallDark.args = withLoadingSmall;
LoadingSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingBigDark = Template.bind({});
LoadingBigDark.args = withLoadingBig;
LoadingBigDark.decorators = [ThemeDecorator(Theme.DARK)];


// ORANGE THEME
export const ViewSmallOrange = Template.bind({});
ViewSmallOrange.args = small;
ViewSmallOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];

export const ViewBigOrange = Template.bind({});
ViewBigOrange.args = big;
ViewBigOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];

export const LoadingSmallOrange = Template.bind({});
LoadingSmallOrange.args = withLoadingSmall;
LoadingSmallOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];

export const LoadingBigOrange = Template.bind({});
LoadingBigOrange.args = withLoadingBig;
LoadingBigOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];
