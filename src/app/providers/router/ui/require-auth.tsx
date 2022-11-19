import { useAuth } from 'entities/user';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '../config';


export function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
  const
    { authData } = useAuth(),
    location = useLocation();

  if (!authData) return <Navigate
    to    = {RoutePath.MAIN}
    state = {{ from: location }}
    replace
  />

  return children
}
