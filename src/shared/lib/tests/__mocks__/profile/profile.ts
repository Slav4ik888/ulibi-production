import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { Profile } from 'entities/profile';
import avatar from 'shared/assets/tests/user.png';


export const PROFILE: Profile = {
  id        : '1',
  firstname : 'Slava',
  lastname  : 'Korzan',
  age       :  17,
  currency  : Currency.USD,
  country   : Country.USA,
  city      : 'Florida',
  username  : 'slav4ik888',
  avatar
}
