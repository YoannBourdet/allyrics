export const HISTORY_PUSHSTATE = 'HISTORY_PUSHSTATE';
export const HISTORY_REPLACESTATE = 'HISTORY_REPLACESTATE';
export const HSITORY_GO = 'HSITORY_GO';

export const push = value => {
  window.history.pushState(
    { search: value },
    null,
    value ? `?search=${value}` : window.location.pathname,
  );
  return { type: HISTORY_PUSHSTATE, value };
};

export const replace = value => {
  window.history.replaceState({ search: value }, null, value ? `?search=${value}` : null);
  return { type: HISTORY_REPLACESTATE, value };
};

export const onPop = cb => dispatch => {
  window.onpopstate = e => {
    dispatch({ type: HSITORY_GO, data: cb(e) });
  };
};
