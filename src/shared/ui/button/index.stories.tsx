import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Button, ThemeButton } from '.';


export default {
  title     : 'shared/Button',
  component : Button,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text'
};

export const Simple = Template.bind({});
Simple.args = {
  children: 'Text',
  theme: ThemeButton.SIMPLE
};

// DARK THEME
export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text'
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SimpleDark = Template.bind({});
SimpleDark.args = {
  children: 'Text',
  theme: ThemeButton.SIMPLE
};
SimpleDark.decorators = [ThemeDecorator(Theme.DARK)];
