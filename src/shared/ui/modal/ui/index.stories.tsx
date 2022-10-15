import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Modal } from '.';


export default {
  title     : 'shared/Modal',
  component : Modal,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

// className
// isOpen
// children
// onClose

// LIGHT THEME
export const ModalLight = Template.bind({});
ModalLight.args = {
  children : 'Visual Studio Code has an integrated terminal to enable working in your shell of choice without leaving the editor. ... Multiple terminals can be placed side-by-side are called a group and are created by splitting a ... The Tasks feature can be used to automate the launching of terminals, for example, the following .vscode/tasks.json file will launch a Command ... By default, the terminal will open at the folder that is opened in the Explorer. The terminal.integrated.cwd set',
  isOpen   : true
};

// DARK THEME
export const ModalDark = Template.bind({});
ModalDark.args = {
  children : 'Visual Studio Code has an integrated terminal to enable working in your shell of choice without leaving the editor. ... Multiple terminals can be placed side-by-side are called a group and are created by splitting a ... The Tasks feature can be used to automate the launching of terminals, for example, the following .vscode/tasks.json file will launch a Command ... By default, the terminal will open at the folder that is opened in the Explorer. The terminal.integrated.cwd set',
  isOpen   : true
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
