/*
  Author: Tyler Childs (network@tychi.me)
  Copyright: Netflix, Inc. (https://netflix.com)
  License: MIT
  Date: 2021-19-03
 */

const CACHE = "CACHE";

export default function memoize(handler, dependencies = []) {
  return function memoizedHandler(event, ion) {
    const { cache } = event.target.dataset;

    const latest = dependencies.map(d => {
      return ion.get(CACHE)[d]
    }).join('');

    const cacheBusted = cache !== latest;
    const empty = event.target.innerHTML === '';
    const uncached = cache === '';

    if(cacheBusted || empty || uncached) {
      handler.call(this, event, ion);
    }

    event.target.dataset.cache = latest;
  }
}
