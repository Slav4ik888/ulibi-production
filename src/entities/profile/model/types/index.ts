import { Country } from 'entities/country';
import { Currency } from 'entities/currency';



export enum ValidateProfileError {
  INVALID_DATA      = 'INVALID_DATA',
  INVALID_USER_DATA = 'INVALID_USER_DATA',
  INVALID_AGE       = 'INVALID_AGE',
  INVALID_COUNTRY   = 'INVALID_COUNTRY',
  SERVER_ERROR      = 'SERVER_ERROR'
}


export interface Profile {
  id         : string,
  firstname? : string,
  lastname?  : string,
  age?       : number,
  currency?  : Currency,
  country?   : Country,
  city?      : string,
  username?  : string,
  avatar?    : string
}


export interface StateProfile {
  data?          : Profile // From server
  form?          : Profile // User changes
  loading        : boolean
  error?         : string
  readonly       : boolean
  validateError? : ValidateProfileError[]
}
