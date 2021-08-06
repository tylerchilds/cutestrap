import createStore from './in/store.js?CACHEBUST';
import database from './in/database.js?CACHEBUST';
import render from './on/render.js?CACHEBUST';
import listen from './on/on.js?CACHEBUST';

let lastState = {};

let subscribers = [
  render
];

const notify = (state) => {
  lastState = state;
  subscribers.map(function notifySubscriber(notify) {
    notify(state)
  })
}

const store = createStore(
  {},
  notify,
  database.save
);

const ion = {
  set: store.set,
  get: store.get,
  load: function load(schema) {
    database.load(schema)
      .then(function restoreFromCache(rows) {
        rows.map(({schema, data}) => store.set(schema, data));
      });
  },
  restore: function restore(schema) {
    return database.load(schema)
      .then(function restoreFromCache(rows) {
        const row = rows.find(x => x.schema === schema) || { data: {} }
        return row.data;
      });
  },
  relay: function relay(subscriber) {
    subscribers = [...subscribers, subscriber];
    subscriber(lastState);
  }
}

ion.on = listen.bind(ion);

export const on = ion.on;
export const load = ion.load;
export const relay = ion.relay;
export const set = ion.set;
export const get = ion.get;

export default ion;
