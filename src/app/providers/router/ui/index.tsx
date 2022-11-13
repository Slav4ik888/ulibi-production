import { selectUserAuthData } from 'entities/user';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from 'shared/ui';
import { PageLoader } from 'widgets/page-loader';
import { routeConfig } from '../config';



export const AppRouter = memo(() => {
  const isAuth = useSelector(selectUserAuthData);
  const routes = useMemo(() => Object
    .values(routeConfig)
    .filter(route => {
      if (route.authOnly && !isAuth) return false
      return true
    }), [isAuth]);


  return (
    <Routes>
      {
        routes.map(({ path, element }) => (
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
});
