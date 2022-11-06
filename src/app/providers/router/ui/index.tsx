import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from 'shared/ui';
import { PageLoader } from 'widgets/page-loader';
import { routeConfig } from '../config';



export const AppRouter = () => (
  <Routes>
    {
      Object
        .values(routeConfig)
        .map(({ path, element }) => (
          <Route
            key     = {path}
            path    = {path}
            element={
              <Suspense fallback={<PageLoader />}>
                <PageWrapper>
                  {element}
                </PageWrapper>
              </Suspense>
            }
          />
        ))
    }
  </Routes>
);
