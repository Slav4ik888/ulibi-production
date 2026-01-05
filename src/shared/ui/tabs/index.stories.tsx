import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ArticleType } from 'entities/article';
import { ThemeDecorator } from 'shared/config/storybook';
import { TabItem, Tabs } from '.';


export default {
  title     : 'shared/Tabs',
  component : Tabs,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Tabs>;


const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const tabs: TabItem<ArticleType>[] = [
  {
    value   : 'ALL',
    content : 'Tab 1'
  },
  {
    value   : 'Desing',
    content : 'Tab 2'
  },
  {
    value   : 'Economic',
    content : 'Tab 3'
  }
]


// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  tabs,
  value      : 'Tab 2',
  onTabClick : action('onTabClick')
};


// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  tabs,
  value      : 'Tab 2',
  onTabClick : action('onTabClick')
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
