import { Country, Currency } from 'shared/consts';


export interface Profile {
  id        : string,
  firstname : string,
  lastname  : string,
  age       : number,
  currency  : Currency,
  country   : Country,
  city      : string,
  username  : string,
  avatar    : string
}

export interface StateProfile {
  data?    : Profile
  loading  : boolean
  error?   : string
  readonly : boolean
}
