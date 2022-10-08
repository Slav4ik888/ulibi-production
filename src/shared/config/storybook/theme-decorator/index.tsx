import 'app/styles/index.scss';
import { Theme } from 'app/providers/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => JSX.Element) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
