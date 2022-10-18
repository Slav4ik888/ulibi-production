import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Input } from '.';


export default {
  title     : 'shared/Input',
  component : Input,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// LIGHT THEME
export const Clear = Template.bind({});
Clear.args = {
  label : 'Text',
  value : '12345'
};

// DARK THEME
export const ClearDark = Template.bind({});
ClearDark.args = {
  label : 'Text',
  value : '12345'
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
