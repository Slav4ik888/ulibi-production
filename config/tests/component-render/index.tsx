import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '../../../src/shared/config/i18n/i18n-for-tests';
import { MemoryRouter } from 'react-router-dom';
import { RoutePath } from '../../../src/shared/config/routes';


export interface ComponentRenderOptions {
  route?: string
}


export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const { route = RoutePath.MAIN } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  )
}
