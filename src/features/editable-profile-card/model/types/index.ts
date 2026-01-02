import { Profile } from 'entities/profile';



export enum ValidateProfileError {
  INVALID_DATA      = 'INVALID_DATA',
  INVALID_USER_DATA = 'INVALID_USER_DATA',
  INVALID_AGE       = 'INVALID_AGE',
  INVALID_COUNTRY   = 'INVALID_COUNTRY',
  SERVER_ERROR      = 'SERVER_ERROR'
}

export interface ProfileSchema {
  data?          : Profile // From server
  form?          : Profile // User changes
  loading        : boolean
  error?         : string
  readonly       : boolean
  validateError? : ValidateProfileError[]
}
