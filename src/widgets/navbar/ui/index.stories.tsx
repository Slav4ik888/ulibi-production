import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Navbar } from '.';


export default {
  title     : 'widgets/Navbar',
  component : Navbar,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

// LIGHT
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const LightWithAuth = Template.bind({});
LightWithAuth.args = {};
LightWithAuth.decorators = [StoreDecorator({
  user: { authData: {} }
})];

// DARK
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const DarkWithAuth = Template.bind({});
DarkWithAuth.args = {};
DarkWithAuth.decorators = [StoreDecorator({
  user: { authData: {} }
})];
