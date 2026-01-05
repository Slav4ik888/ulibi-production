import { useAuth, UserRole } from 'entities/user';
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '../config';



interface Props {
  children : JSX.Element
  roles?   : UserRole[]
}

export function RequireAuth({ children, roles }: Props): JSX.Element {
  const { authData, userRoles } = useAuth();
  const location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    if (! roles) return true;

    return roles.some(requiredRole => {
      const hasRole = userRoles?.includes(requiredRole);

      return hasRole;
    });
  }, [roles, userRoles]);


  if (! authData) return <Navigate
    to    = {RoutePath.MAIN}
    state = {{ from: location }}
    replace
  />

  if (! hasRequiredRoles) return <Navigate
    to    = {RoutePath.FORBIDDEN}
    state = {{ from: location }}
    replace
  />

  return children
}
