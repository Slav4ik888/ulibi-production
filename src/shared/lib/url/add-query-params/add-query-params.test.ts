import { getQueryParams } from '.';


describe('getQueryParams', () => {
  test('with one param', () => {
    const params = getQueryParams({
      test: 'value'
    });

    expect(params).toBe('?test=value');
  });

  test('with multiple param', () => {
    const params = getQueryParams({
      test: 'value',
      second: '2'
    });

    expect(params).toBe('?test=value&second=2');
  });

  test('with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      second: undefined
    });

    expect(params).toBe('?test=value');
  });
});

// npm run test:unit add-query-params.test.ts
