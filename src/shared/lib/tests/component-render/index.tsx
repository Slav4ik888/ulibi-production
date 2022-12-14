import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '../../../config/i18n/i18n-for-tests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { RoutePath } from 'app/providers/router/config';



export interface ComponentRenderOptions {
  route?        : string
  initialState? : DeepPartial<StateSchema>
}


export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const { route = RoutePath.MAIN, initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}
