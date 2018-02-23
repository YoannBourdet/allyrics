// https://medium.com/@_jh3y/throttling-and-debouncing-in-javascript-b01cad5c8edf
/* eslint-disable func-names */
const debounce = (func, delay) => {
  let inDebounce;
  return function (...args) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(this, args), delay);
  };
};

const throttle = (func, limit) => {
  let inThrottle;
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
/* eslint-enable func-names */

module.exports = {
  debounce,
  throttle,
};
