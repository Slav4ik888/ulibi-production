import { useSelector } from 'react-redux'
import { selectUserAuthData, User } from '../..'


interface UseAuth {
  authData: User | undefined | null
}


export const useAuth = (): UseAuth => {
  const authData = useSelector(selectUserAuthData);

  return {
    authData
  }
}
