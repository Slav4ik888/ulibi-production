import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from 'shared/ui';
import { PageLoader } from 'widgets/page-loader';
import { AppRouteProps, routeConfig } from '../config';
import { RequireAuth } from './require-auth';



export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRouteProps) => {
    const component = (
      <Suspense fallback={<PageLoader />}>
        <PageWrapper>
          {element}
        </PageWrapper>
      </Suspense>
    );

    return (
      <Route
        key     = {path}
        path    = {path}
        element={
          authOnly
            ? <RequireAuth>{component}</RequireAuth>
            : component
        }
      />
    )
  }, []);


  return (
    <Routes>
      {
        Object
          .values(routeConfig)
          .map(renderWithWrapper)
      }
    </Routes>
  );
});
