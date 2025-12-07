import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Button } from '../../button';
import { DropdownMenu } from '.';


export default {
  title     : 'shared/DropdownMenu',
  component : DropdownMenu,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof DropdownMenu>;


const Template: ComponentStory<typeof DropdownMenu> = (args) => <DropdownMenu {...args} />;

// LIGHT THEME
export const Menu = Template.bind({});
Menu.args = {
  trigger: <Button>OpenMenu</Button>,
  items: [
    {
      content : 'first',
      onClick : () => {}
    },
    {
      content : 'second',
      onClick : () => {}
    },
    {
      content : 'third',
      onClick : () => {}
    }
  ]
};

// DARK THEME
export const MenuDark = Template.bind({});
MenuDark.args = {
  trigger: <Button>OpenMenu</Button>,
  items: [
    {
      content : 'first',
      onClick : () => {}
    },
    {
      content : 'second',
      onClick : () => {}
    },
    {
      content : 'third',
      onClick : () => {}
    }
  ]
};
MenuDark.decorators = [ThemeDecorator(Theme.DARK)];
