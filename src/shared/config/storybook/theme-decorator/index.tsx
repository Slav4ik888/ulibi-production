import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => JSX.Element) => (
  <ThemeProvider initial={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
