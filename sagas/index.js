import { call, put, takeLatest } from 'redux-saga/effects';
import serviceSearch from '../services/client/search';

function* fetchList(action) {
  const datas = yield call(serviceSearch, action.value);
  yield put({ type: 'FETCH_LIST', datas });
}

function* updateSearch() {
  yield takeLatest('UPDATE_SEARCH', fetchList);
}

export default updateSearch;
