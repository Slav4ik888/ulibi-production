import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import AdminPanelPage from '.';


export default {
  title     : 'pages/AdminPanelPage',
  component : AdminPanelPage,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
