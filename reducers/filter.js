import { ADD_FILTER } from '../actions/filter';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return { ...state, value: action.value };
    default:
      return state;
  }
};
