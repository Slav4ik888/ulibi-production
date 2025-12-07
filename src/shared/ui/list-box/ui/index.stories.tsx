import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Listbox } from '.';


export default {
  title     : 'shared/Listbox',
  component : Listbox,
  argTypes  : {
    backgroundColor: { control: 'color' }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '7rem' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Listbox>;


const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

const VALUE = 'List demo';
const ITEMS = [
  { content: 'Some demo text 1', value: '1' },
  { content: 'Some demo text 2', value: '2' },
  { content: 'Some demo text 3', value: '3' },
  { content: 'Some demo text 4', value: '4' }
];


// LIGHT THEME
export const List = Template.bind({});
List.args = {
  value: VALUE,
  items: ITEMS
};

export const ListTopLeft = Template.bind({});
ListTopLeft.args = {
  direction: 'top left',
  value: VALUE,
  items: ITEMS
};

export const ListTopRight = Template.bind({});
ListTopRight.args = {
  direction: 'top right',
  value: VALUE,
  items: ITEMS
};

export const ListBottomLeft = Template.bind({});
ListBottomLeft.args = {
  direction: 'bottom left',
  value: VALUE,
  items: ITEMS
};

export const ListBottomRight = Template.bind({});
ListBottomRight.args = {
  direction: 'bottom right',
  value: VALUE,
  items: ITEMS
};

// DARK THEME
export const ListDark = Template.bind({});
ListDark.args = {
  value: VALUE,
  items: ITEMS
};
ListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListDarkTopLeft = Template.bind({});
ListDarkTopLeft.args = {
  direction: 'top left',
  value: VALUE,
  items: ITEMS
};
ListDarkTopLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const ListDarkTopRight = Template.bind({});
ListDarkTopRight.args = {
  direction: 'top right',
  value: VALUE,
  items: ITEMS
};
ListDarkTopRight.decorators = [ThemeDecorator(Theme.DARK)];

export const ListDarkBottomLeft = Template.bind({});
ListDarkBottomLeft.args = {
  direction: 'bottom left',
  value: VALUE,
  items: ITEMS
};
ListDarkBottomLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const ListDarkBottomRight = Template.bind({});
ListDarkBottomRight.args = {
  direction: 'bottom right',
  value: VALUE,
  items: ITEMS
};
ListDarkBottomRight.decorators = [ThemeDecorator(Theme.DARK)];
