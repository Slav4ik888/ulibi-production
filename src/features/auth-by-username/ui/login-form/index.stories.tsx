import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { LoginForm } from '.';


export default {
  title     : 'features/LoginForm',
  component : LoginForm,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>;


const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

// LIGHT THEME
export const Clear = Template.bind({});

// DARK THEME
export const ClearDark = Template.bind({});
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
