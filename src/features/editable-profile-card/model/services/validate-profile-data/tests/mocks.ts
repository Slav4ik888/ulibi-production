import { ValidateProfileError } from '../../../types';
import { PROFILE } from 'shared/lib/tests/__mocks__';
import { Mocks } from './types';
import { Profile } from 'entities/profile';


export const mocks: Mocks = [
  [
    {
      description: 'Succes validate',
      data: {
        ...PROFILE
      }
    },
    []
  ],
  [
    {
      description: 'empty profile',
      data: {} as unknown as Profile
    },
    [
      ValidateProfileError.INVALID_USER_DATA,
      ValidateProfileError.INVALID_AGE,
      ValidateProfileError.INVALID_COUNTRY
    ]
  ],
  [
    {
      description: 'without profile',
      data: undefined as unknown as Profile
    },
    [ValidateProfileError.INVALID_DATA]
  ],
  [
    {
      description: 'without firstname',
      data: {
        ...PROFILE,
        firstname: ''
      }
    },
    [ValidateProfileError.INVALID_USER_DATA]
  ],
  [
    {
      description: 'without lastname',
      data: {
        ...PROFILE,
        lastname: ''
      }
    },
    [ValidateProfileError.INVALID_USER_DATA]
  ],
  [
    {
      description: 'without fistrname & lastname',
      data: {
        ...PROFILE,
        firstname : '',
        lastname  : ''
      }
    },
    [ValidateProfileError.INVALID_USER_DATA]
  ],
  [
    {
      description: 'without fistrname & lastname',
      data: {
        ...PROFILE,
        firstname : '',
        lastname  : ''
      }
    },
    [ValidateProfileError.INVALID_USER_DATA]
  ],
  [
    {
      description: 'without age',
      data: {
        ...PROFILE,
        age : undefined
      }
    },
    [ValidateProfileError.INVALID_AGE]
  ],
  [
    {
      description: 'invalid age = NaN',
      data: {
        ...PROFILE,
        age : NaN
      }
    },
    [ValidateProfileError.INVALID_AGE]
  ],
  [
    {
      description: 'invalid age = string',
      data: {
        ...PROFILE,
        age : 'undefined' as unknown as number
      }
    },
    [ValidateProfileError.INVALID_AGE]
  ],
  [
    {
      description: 'without country',
      data: {
        ...PROFILE,
        country : undefined
      }
    },
    [ValidateProfileError.INVALID_COUNTRY]
  ],
];
