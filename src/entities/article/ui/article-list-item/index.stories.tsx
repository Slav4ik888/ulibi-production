import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { ArticleListItem } from '.';


export default {
  title     : 'article/ArticleListItem',
  component : ArticleListItem,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleListItem>;


const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

// LIGHT THEME
export const Clear = Template.bind({});
Clear.args = {
  children : 'Text'
};

// DARK THEME
export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text'
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
