import { ThemeProvider } from 'app/providers/theme';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { App } from './app';
import 'shared/config/i18n';


render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
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
// git add . && git commit -m "start 28 upgrade Sidebar, button themes" && git push -u origin main
