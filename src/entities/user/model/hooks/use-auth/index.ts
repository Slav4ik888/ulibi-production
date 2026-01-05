import { useSelector } from 'react-redux'
import { selectUserAuthData, selectUserRoles, User, UserRole } from '../..'


interface UseAuth {
  authData: User | undefined | null
  userRoles: UserRole[]
}


export const useAuth = (): UseAuth => {
  const authData = useSelector(selectUserAuthData);
  const userRoles = useSelector(selectUserRoles);

  return {
    authData, userRoles
  }
}
