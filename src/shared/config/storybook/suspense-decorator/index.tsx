import 'app/styles/index.scss';
import { Suspense } from 'react';


export const SuspenseDecorator = (StoryComponent: () => JSX.Element) => (
  // eslint-disable-next-line i18next/no-literal-string
  <Suspense fallback={<div>Загрузка...</div>}>
    <StoryComponent />
  </Suspense>
);
