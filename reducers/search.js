import { UPDATE_SEARCH } from '../actions/search';

const defaultState = { value: '' };

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return { ...state, value: action.value };
    default:
      return state;
  }
};
