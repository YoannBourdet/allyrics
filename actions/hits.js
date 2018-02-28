// import serviceSearch from '../services/client/search';

export const FETCH_LIST = 'FETCH_LIST';

// export const fetch = value => dispatch =>
//   serviceSearch(value).then(datas => dispatch({ type: FETCH_LIST, datas }));

export const fetch = value => ({ type: FETCH_LIST, value });
