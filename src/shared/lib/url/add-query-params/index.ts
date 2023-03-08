
export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) searchParams.set(name, value);
  });

  return `?${searchParams.toString()}`
};

/**
 * Add params from browser request URL
 * @param params
 */
export const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
}

// {
//   search: 'my name'
// }
