import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from 'shared/ui';
import { routeConfig } from '../config';


export const AppRouter = () => (
  <Suspense fallback={<PageWrapper>Loading...</PageWrapper>}>
    <Routes>
      {
        Object
          .values(routeConfig)
          .map(({ path, element }) => (
            <Route
              key     = {path}
              path    = {path}
              element = {
                <PageWrapper>
                  {element}
                </PageWrapper>
              }
            />
          ))
      }
    </Routes>
  </Suspense>
);
