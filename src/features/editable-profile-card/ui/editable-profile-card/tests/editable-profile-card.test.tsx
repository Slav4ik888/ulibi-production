import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from '../../../../../shared/lib/tests';
import { EditableProfileCard } from '..';
import { Profile } from 'entities/profile';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { profileReducer } from '../../../model/slice';
import { userEvent } from '@testing-library/user-event';
import { api } from 'shared/api';



const PROFILE: Profile = {
  id        : '3',
  firstname : 'admin',
  lastname  : 'super',
  age       : 12,
  currency  : Currency.RUB,
  country   : Country.RUSSIA,
  city      : 'Irkutsk',
  username  : 'admin123',
  avatar    : 'https://avatars.githubusercontent.com/u/42781105?v=4'
};


const OPTIONS = {
  initialState: {
    profile: {
      readonly : true,
      data     : PROFILE,
      form     : PROFILE
    },
    user: {
      authData: {
        id       : '3',
        username : 'admin123'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
};



describe('<EditableProfileCard />', () => {
  test('Must toggle to edit mode', async () => {
    componentRender(<EditableProfileCard id='1' />, OPTIONS);

    await userEvent.click(screen.getByTestId('ProfileHeader.EditButton'));
    expect(screen.getByTestId('ProfileHeader.CancelButton')).toBeInTheDocument();
  });

  test('After cancel value should be nulling', async () => {
    componentRender(<EditableProfileCard id='1' />, OPTIONS);
    await userEvent.click(screen.getByTestId('ProfileHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'new lastname');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('new lastname');

    await userEvent.click(screen.getByTestId('ProfileHeader.CancelButton'));
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('super');
  });

  test('Should be error by validation', async () => {
    componentRender(<EditableProfileCard id='1' />, OPTIONS);
    await userEvent.click(screen.getByTestId('ProfileHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.click(screen.getByTestId('ProfileHeader.SaveButton'));
    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('Should be PUT request to server if not errors', async () => {
    const mockPutReq = jest.spyOn(api, 'put');
    componentRender(<EditableProfileCard id='1' />, OPTIONS);
    await userEvent.click(screen.getByTestId('ProfileHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'new firstname');
    await userEvent.click(screen.getByTestId('ProfileHeader.SaveButton'));
    expect(mockPutReq).toHaveBeenCalled();
  });
});

// npm run test:unit editable-profile-card.test.tsx
