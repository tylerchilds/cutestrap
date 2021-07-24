/*
  Author: Tyler Childs (network@tychi.me)
  Copyright: Netflix, Inc. (https://netflix.com)
  License: MIT
  Date: 2021-05-03
 */

import { observe, disregard } from './render.js?CACHEBUST';
import listen from './listen.js?CACHEBUST';

export default function on(type, selector, handler) {
  const unbind = listen(type, selector, handler, this);

  if(type === 'render') {
    observe(selector);
  }

  return function unlisten() {
    if(type === 'render') {
      disregard(selector);
    }

    unbind();
  }
}
