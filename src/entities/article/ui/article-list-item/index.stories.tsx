import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ArticlesView } from '../../model/types';
import { ThemeDecorator } from 'shared/config/storybook';
import { ArticleListItem } from '.';
import { MOCK_ARTICLE } from 'shared/lib/tests/__mocks__';


export default {
  title     : 'article/ArticleListItem',
  component : ArticleListItem,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleListItem>;


const
  Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />,
  article = MOCK_ARTICLE,
  small = {
    article,
    view: ArticlesView.TILE
  },
  big = {
    article,
    view: ArticlesView.LIST
  };


// LIGHT THEME
export const ViewSmall = Template.bind({});
ViewSmall.args = small;

export const ViewBig = Template.bind({});
ViewBig.args = big;

// DARK THEME
export const ViewSmallDark = Template.bind({});
ViewSmallDark.args = small;
ViewSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ViewBigDark = Template.bind({});
ViewBigDark.args = big;
ViewBigDark.decorators = [ThemeDecorator(Theme.DARK)];


// ORANGE THEME
export const ViewSmallOrange = Template.bind({});
ViewSmallOrange.args = small;
ViewSmallOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];

export const ViewBigOrange = Template.bind({});
ViewBigOrange.args = big;
ViewBigOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];
