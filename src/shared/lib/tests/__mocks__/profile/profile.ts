import { Profile } from 'entities/profile';
import { Country, Currency } from 'shared/consts';


export const PROFILE: Profile = {
  id        : '1',
  firstname : 'Slava',
  lastname  : 'Korzan',
  age       :  41,
  currency  : Currency.RUB,
  country   : Country.RUSSIA,
  city      : 'Moscow',
  username  : 'slav4ik888',
  avatar    : 'https://yt3.ggpht.com/ytc/AKedOLQ4oqlAr9ClrQoBBSGGvMZcZEhjTeiSwfG_nB4i=s900-c-k-c0x00ffffff-no-rj'
}
