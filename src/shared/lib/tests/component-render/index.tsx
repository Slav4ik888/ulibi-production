import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '../../../config/i18n/i18n-for-tests';
import { MemoryRouter } from 'react-router-dom';
import { RoutePath } from '../../../config/routes';
import { State, StoreProvider } from 'app/providers/store';



export interface ComponentRenderOptions {
  route?        : string
  initialState? : DeepPartial<State>
}


export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const { route = RoutePath.MAIN, initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
