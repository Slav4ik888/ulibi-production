import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Button, ButtonSize, ButtonTheme } from '.';


export default {
  title     : 'shared/Button',
  component : Button,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// LIGHT THEME
export const Clear = Template.bind({});
Clear.args = {
  children : 'Text'
};

export const ClearInv = Template.bind({});
ClearInv.args = {
  children : 'Text',
  theme    : ButtonTheme.CLEAR_INV
};

export const Simple = Template.bind({});
Simple.args = {
  children : 'Text',
  theme    : ButtonTheme.SIMPLE
};

export const SimpleSizeL = Template.bind({});
SimpleSizeL.args = {
  children : 'Text',
  theme    : ButtonTheme.SIMPLE,
  size     : ButtonSize.L
};

export const SimpleSizeXL = Template.bind({});
SimpleSizeXL.args = {
  children : 'Text',
  theme    : ButtonTheme.SIMPLE,
  size     : ButtonSize.XL
};

export const Background = Template.bind({});
Background.args = {
  children : 'Text',
  theme    : ButtonTheme.BACKGROUND
};

export const BackgroundInv = Template.bind({});
BackgroundInv.args = {
  children : 'Text',
  theme    : ButtonTheme.BACKGROUND_INV
};

// Square
export const SquareM = Template.bind({});
SquareM.args = {
  children : '>',
  theme    : ButtonTheme.BACKGROUND_INV,
  square   : true
};

export const SquareL = Template.bind({});
SquareL.args = {
  children : '>',
  theme    : ButtonTheme.BACKGROUND_INV,
  size     : ButtonSize.L,
  square   : true
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children : '>',
  theme    : ButtonTheme.BACKGROUND_INV,
  size     : ButtonSize.XL,
  square   : true
};


// DARK THEME
export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text'
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInvDark = Template.bind({});
ClearInvDark.args = {
  children : 'Text',
  theme    : ButtonTheme.CLEAR_INV
};
ClearInvDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SimpleDark = Template.bind({});
SimpleDark.args = {
  children : 'Text',
  theme    : ButtonTheme.SIMPLE
};
SimpleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children : 'Text',
  theme    : ButtonTheme.BACKGROUND
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvDark = Template.bind({});
BackgroundInvDark.args = {
  children : 'Text',
  theme    : ButtonTheme.BACKGROUND_INV
};
BackgroundInvDark.decorators = [ThemeDecorator(Theme.DARK)];

// Square dark
export const SquareDarkM = Template.bind({});
SquareDarkM.args = {
  children : '>',
  theme    : ButtonTheme.BACKGROUND_INV,
  square   : true
};
SquareDarkM.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareDarkL = Template.bind({});
SquareDarkL.args = {
  children : '>',
  theme    : ButtonTheme.BACKGROUND_INV,
  size     : ButtonSize.L,
  square   : true
};
SquareDarkL.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareDarkXL = Template.bind({});
SquareDarkXL.args = {
  children : '>',
  theme    : ButtonTheme.BACKGROUND_INV,
  size     : ButtonSize.XL,
  square   : true
};
SquareDarkXL.decorators = [ThemeDecorator(Theme.DARK)];
