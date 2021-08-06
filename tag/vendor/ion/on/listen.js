/*
  Author: Tyler Childs (network@tychi.me)
  Copyright: Netflix, Inc. (https://netflix.com)
  License: MIT
  Date: 2021-19-03
 */
export default function listen(type, selector, handler, scope) {
  const callback = (event) => {
    if(event.target && event.target.matches && event.target.matches(selector)) {
      handler.call(this, event, scope);
    }
  };

  document.addEventListener(type, callback, true);

  return function unlisten() {
    document.removeEventListener(type, callback, true);
  }
}
