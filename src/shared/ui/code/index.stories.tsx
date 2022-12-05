import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Code } from '.';


export default {
  title     : 'shared/Code',
  component : Code,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Code>;


const
  Template: ComponentStory<typeof Code> = (args) => <Code {...args} />,
  code = `
    import { ComponentStory, ComponentMeta } from '@storybook/react';
    import { Theme } from 'app/providers/theme';
    import { ThemeDecorator } from 'shared/config/storybook';
    import { Code } from '.';


    export default {
      title     : 'shared/Code',
      component : Code,
      argTypes  : {
        backgroundColor: { control: 'color' }
      }
    } as ComponentMeta<typeof Code>;


    const
      Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;
  `;


// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  code
};


// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  code
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];


// ORANGE THEME
export const PrimaryOrangeDark = Template.bind({});
PrimaryOrangeDark.args = {
  code
};
PrimaryOrangeDark.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];
