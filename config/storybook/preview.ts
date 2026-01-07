import { addDecorator } from '@storybook/react';
// eslint-disable-next-line max-len
import { StyleDecorator, ThemeDecorator, RouterDecorator, SuspenseDecorator } from '../../src/shared/config/storybook';
import { Theme } from '../../src/app/providers/theme';


export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
// @ts-ignore
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
