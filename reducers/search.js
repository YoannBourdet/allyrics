import { MAKE_SEARCH } from '../actions/search';

const defaultState = { value: null };

export default (state = defaultState, action) => {
  switch (action.type) {
    case MAKE_SEARCH:
      return { ...state, value: action.value };
    default:
      return state;
  }
};
