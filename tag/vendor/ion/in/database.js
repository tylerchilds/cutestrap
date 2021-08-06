const databaseName = 'ion';
const storeName = 'cache';

const database = new Promise(function initialize(resolve, reject) {
  const request = indexedDB.open(databaseName, 1);

  request.onupgradeneeded = function(event) {
    const database = event.target.result;

    database.createObjectStore(storeName, { keyPath: 'schema', autoIncrement: false });
  };

  request.onsuccess = function(event) {
    resolve(event.target.result);
  };
});

export async function load(keys) {
  const db = await database;

  const transaction = db.transaction(storeName);
  const objectStore = transaction.objectStore(storeName);

  const rows = await new Promise(function loadFromDatabase(resolve, reject) {
    const rows = [];
    const read = objectStore.openCursor();

    read.onsuccess = function(event) {
      let cursor = event.target.result;

      if (cursor) {
        if(keys.includes(cursor.key)) {
          rows.push(cursor.value);
        }
        cursor.continue();
      } else {
        resolve(rows)
      }
    };

    read.onerror = reject;
  });

  return rows;
}

export async function save(schema, data) {
  const db = await database;

  const record = { schema, data };

  const transaction = db.transaction(storeName, 'readwrite');
  const objectStore = transaction.objectStore(storeName);

  let request;

  return new Promise(function saveToDatabase(resolve, reject) {
    try {
      request = objectStore.get(schema);
      request.onsuccess = function(event) {
        const request = objectStore.put(record);
        request.onsuccess = resolve;
      }
    } catch (e) {
      const request = objectStore.add(record);
      request.onsuccess = resolve;
      request.onerror = reject;
    }
  });
}

export default {
  save,
  load
}
