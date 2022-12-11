import { StateSchema } from 'app/providers/store';
import { STATE_ADD_COMMENT_FORM } from 'shared/lib/tests/__mocks__';
import { selectAddCommentFormComment, selectAddCommentFormError } from '.';


// selectAddCommentFormComment
describe('selectAddCommentFormComment', () => {
  test('Should return article data', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: STATE_ADD_COMMENT_FORM
    };

    expect(selectAddCommentFormComment(state as StateSchema)).toEqual(STATE_ADD_COMMENT_FORM.comment);
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectAddCommentFormComment(undefined as unknown as StateSchema)).toEqual('');
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectAddCommentFormComment({} as unknown as StateSchema)).toEqual('');
  });
});


// selectAddCommentFormError
describe('selectAddCommentFormError', () => {
  test('Should return article error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { ...STATE_ADD_COMMENT_FORM, error: 'Error' }
    };

    expect(selectAddCommentFormError(state as StateSchema)).toEqual('Error');
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectAddCommentFormError(undefined as unknown as StateSchema)).toEqual(undefined);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectAddCommentFormError({} as unknown as StateSchema)).toEqual(undefined);
  });
});


// npm run test:unit add-comment-form-selectors.test.ts
