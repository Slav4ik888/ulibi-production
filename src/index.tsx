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

// git add . && git commit -m "end lesson 24" && git push -u origin main
