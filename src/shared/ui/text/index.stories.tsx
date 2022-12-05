import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Text, TextSize, TextTheme } from '.';


export default {
  title     : 'shared/Text',
  component : Text,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>;


const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// LIGHT THEME
export const PrimarySizeS = Template.bind({});
PrimarySizeS.args = {
  title : 'Title',
  text  : 'Some text nuh, whis that modue nuh',
  size  : TextSize.S
};

export const Primary = Template.bind({});
Primary.args = {
  title : 'Title',
  text  : 'Some text nuh, whis that modue nuh'
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
  title : 'Title',
  text  : 'Some text nuh, whis that modue nuh',
  size  : TextSize.L
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title : 'Title'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text  : 'Some text nuh, whis that modue nuh'
};

export const Error = Template.bind({});
Error.args = {
  title : 'Title',
  text  : 'Some text nuh, whis that modue nuh',
  theme : TextTheme.ERROR
};


// DARK THEME
export const PrimaryDarkSizeS = Template.bind({});
PrimaryDarkSizeS.args = {
  title : 'Title',
  text  : 'Some text nuh, whis that modue nuh',
  size  : TextSize.S
};
PrimaryDarkSizeS.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title : 'Title',
  text  : 'Some text nuh, whis that modue nuh'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkSizeL = Template.bind({});
PrimaryDarkSizeL.args = {
  title : 'Title',
  text  : 'Some text nuh, whis that modue nuh',
  size  : TextSize.L
};
PrimaryDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title : 'Title'
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text  : 'Some text nuh, whis that modue nuh'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title : 'Title',
  text  : 'Some text nuh, whis that modue nuh',
  theme : TextTheme.ERROR
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
