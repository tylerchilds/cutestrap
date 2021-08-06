/*
  Author: Tyler Childs (network@tychi.me)
  Copyright: Netflix, Inc. (https://netflix.com)
  License: MIT
  Date: 2021-19-03
 */
const CACHE = "CACHE";
import uuidv4 from '../../uuidv4.js?CACHEBUST';

export default function createStore(
  initialState = {},
  notify = () => null,
  save = () => null
) {
  let state = {
    [CACHE]: {},
    ...initialState
  };

  const context = {
    set: function(schema, payload, handler = defaultHandler) {
      if(typeof handler === 'function') {
        const newCache = touchCache(state[CACHE], schema);

        const newResource = handler(state[schema] || {}, payload);

        state = {
          ...state,
          [CACHE]: newCache,
          [schema]: newResource
        };

        save(schema, state[schema]);

        notify(state);
      } else {
        console.error('No Resource Handler provided: ', schema, payload);
      }
    },

    get: function(schema) {
      return state[schema];
    }
  }

  return context;
}

function touchCache(state, schema) {
  return {
    ...state,
    [schema]: uuidv4()
  }
}

function defaultHandler(state, payload) {
  return {
    ...state,
    ...payload
  }
}
