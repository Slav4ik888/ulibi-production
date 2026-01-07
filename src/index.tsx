import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { StoreProvider } from 'app/providers/store';
import { ThemeProvider } from 'app/providers/theme';
import { App } from './app';
import 'shared/config/i18n';
import './app/styles/index.scss';

const container = document.getElementById('root');

if (! container) throw new Error('Root element not found');

const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  // </React.StrictMode>,
);

//
// npx sb init --builder webpack5
//
// npm i -D loki
// npx loki init --config ./config/storybook
// npx loki test
//
// git remote set-url origin https://slav4ik888:token@github.com/slav4ik888/ulibi-production.git
//

// Чтобы test:ui проходил без доступа к json-server, не ломаясь на ошибке
// FAIL chrome.docker/chrome.iphone7/Pages/ProfilePage
// Light
// 2 requests failed to load; http://192.168.100.19:8000/profile, http://192.168.100.19:8000/profile
// в package.json добавляем игнор на ошибки при запросах
// https://loki.js.org/configuration.html#fetchfailignore
// https://github.com/oblador/loki/blob/master/examples/react/loki.config.js
// "loki": {
// "fetchFailIgnore": ".*",
// "configurations": {


// "stylelint.config": null


// git add . && git commit -m "lesson 75 end" && git push -u origin main
