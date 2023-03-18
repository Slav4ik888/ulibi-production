import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { StoreProvider } from 'app/providers/store';
import { ThemeProvider } from 'app/providers/theme';
import { App } from './app';
import 'shared/config/i18n';
import './app/styles/index.scss';


render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
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


// git add . && git commit -m "lesson 60" && git push -u origin main
