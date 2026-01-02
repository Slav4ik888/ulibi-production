import { ValidateProfileError } from '../../types';
import { Profile } from 'entities/profile';


export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
  if (!profile) return [ValidateProfileError.INVALID_DATA];

  const
    { firstname, lastname, age, country } = profile,
    errors: ValidateProfileError[] = [];


  if (!firstname || !lastname) errors.push(ValidateProfileError.INVALID_USER_DATA);

  if (!age || !Number.isInteger(Number(age))) errors.push(ValidateProfileError.INVALID_AGE);

  if (!country) errors.push(ValidateProfileError.INVALID_COUNTRY);

  return errors
}
