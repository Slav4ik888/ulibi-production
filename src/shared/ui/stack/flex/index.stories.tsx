import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ReactNode } from 'react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Flex } from '.';



export default {
  title     : 'shared/Flex',
  component : Flex,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Flex>;


const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const CHILDREN: ReactNode = (<>
  <div>First |&nbsp;</div>
  <div>Second |&nbsp;</div>
  <div>Third |&nbsp;</div>
  <div>Fourth |&nbsp;</div>
  <div>Fifth</div>
</>);

// LIGHT THEME

// Row
export const RowDefault = Template.bind({});
RowDefault.args = {
  children: CHILDREN
};

export const Row = Template.bind({});
Row.args = {
  children   : CHILDREN,
  direction  : 'row'
};

export const RownGap24 = Template.bind({});
RownGap24.args = {
  children   : CHILDREN,
  gap        : '24'
};

export const RowStartBetween = Template.bind({});
RowStartBetween.args = {
  children   : CHILDREN,
  align      : 'start',
  justify    : 'between',
  direction  : 'row'
};

// Column

export const Column = Template.bind({});
Column.args = {
  children   : CHILDREN,
  direction  : 'column'
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  children   : CHILDREN,
  direction  : 'column',
  gap        : '4'
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  children   : CHILDREN,
  direction  : 'column',
  gap        : '8'
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  children   : CHILDREN,
  direction  : 'column',
  gap        : '16'
};

export const ColumnGap24 = Template.bind({});
ColumnGap24.args = {
  children   : CHILDREN,
  direction  : 'column',
  gap        : '24'
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
  children   : CHILDREN,
  direction  : 'column',
  gap        : '32'
};

export const ColumnCenterStart = Template.bind({});
ColumnCenterStart.args = {
  children   : CHILDREN,
  align      : 'start',
  justify    : 'start',
  direction  : 'column'
};

// DARK THEME
// export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
//   width        : '100%',
//   height       : 200
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// GREEN THEME
// export const PrimaryGreen = Template.bind({});
// PrimaryGreen.args = {
//   width        : '100%',
//   height       : 200
// };
// PrimaryGreen.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];
