import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import MainPage from '.'; 


export default {
  title     : 'pages/MainPage',
  component : MainPage,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args: object) => <MainPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];