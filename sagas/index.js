import { call, put, take, takeLatest, all, fork } from 'redux-saga/effects';
import serviceSearch from '../services/client/search';

/*
 * Workers
 */

function* fetchList({ value }) {
  const datas = yield call(serviceSearch, value);
  yield put({ type: 'FETCH_LIST', datas });
}

/*
 * Watchers
 */

function* watchUpdateSearch() {
  yield takeLatest('UPDATE_SEARCH', fetchList);
}

function* watchUpdateHistory() {
  while (true) {
    const { value } = yield take('HISTORY_PUSHSTATE');
    yield window.history.pushState(
      { search: value },
      null,
      value ? `?search=${value}` : window.location.pathname,
    );
  }
}

function* watchReplaceHistory() {
  while (true) {
    const { value } = yield take('HISTORY_REPLACESTATE');
    yield window.history.replaceState({ search: value }, null, value ? `?search=${value}` : null);
  }
}

function* watchOnPopHistory() {
  while (true) {
    const { cb } = yield take('HSITORY_GO');
    yield (window.onpopstate = e => cb(e));
  }
}

export default function* root() {
  yield all([
    fork(watchUpdateSearch),
    fork(watchUpdateHistory),
    fork(watchReplaceHistory),
    fork(watchOnPopHistory),
  ]);
}
