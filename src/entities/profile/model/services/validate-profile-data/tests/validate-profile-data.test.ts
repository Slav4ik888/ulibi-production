import { validateProfileData } from '../..';
import { mocks } from './mocks';



describe('validateProfileData', () => {
  mocks.forEach(m => test(m[0].description, async () => {
    const result = validateProfileData(m[0].data);

    expect(result).toEqual(m[1]);
  }));
});


// npm run test:unit validate-profile-data.test.ts
