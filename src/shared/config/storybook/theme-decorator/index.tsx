import 'app/styles/index.scss';
import { Theme } from 'app/providers/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => JSX.Element) => {

  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  )
};
