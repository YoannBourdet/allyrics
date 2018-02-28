export const HISTORY_PUSHSTATE = 'HISTORY_PUSHSTATE';
export const HISTORY_REPLACESTATE = 'HISTORY_REPLACESTATE';
export const HSITORY_GO = 'HSITORY_GO';

export const push = value => ({ type: HISTORY_PUSHSTATE, value });
export const replace = value => ({ type: HISTORY_REPLACESTATE, value });
export const onPop = cb => ({ type: HSITORY_GO, cb });
