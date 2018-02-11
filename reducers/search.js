import { MAKE_SEARCH } from '../actions/search';

const defaultState = { hits: [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case MAKE_SEARCH:
      return { ...state, hits: action.hits };
    default:
      return state;
  }
};
