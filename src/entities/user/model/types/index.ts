export interface User {
  id: string
  username: string
}

export interface StateUser {
  authData?: User | null
}
