import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { StoreProvider } from 'app/providers/store';
import { ThemeProvider } from 'app/providers/theme';
import { App } from './app';
import 'shared/config/i18n';
import './app/styles/index.scss';


render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);

//
// npx sb init --builder webpack5
//
// npm i -D loki
// npx loki init --config ./config/storybook
// npx loki test
//
// git remote set-url origin https://username:token@github.com/username/repository.git
//
// git add . && git commit -m "start 34 add login-form" && git push -u origin main
