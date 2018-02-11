import serviceSearch from '../services/search';

export const MAKE_SEARCH = 'MAKE_SEARCH';

export const makeSearch = value => dispatch =>
  serviceSearch(value).then(data => dispatch({ type: MAKE_SEARCH, hits: data }));
