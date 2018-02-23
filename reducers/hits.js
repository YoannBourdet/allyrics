import { FETCH_LIST } from '../actions/hits';

const defaultState = { datas: [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return { ...state, datas: action.datas };
    default:
      return state;
  }
};
