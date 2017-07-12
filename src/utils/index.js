export function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function once(func) {
  let once = false;
  let res;
  return function() {
    if (!once) {
      once = true;
      res = func.apply(this, arguments);
    }
    return res;
  };
}