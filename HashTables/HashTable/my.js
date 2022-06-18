class HashTable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];

      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    const store = this.keyMap[index];

    if (store) {
      let chainIndex = store.findIndex(([k]) => k === key);
      if (chainIndex > -1) {
        store[chainIndex] = [key, value];
      } else {
        store.push([key, value]);
      }
    } else this.keyMap[index] = [[key, value]];

    return this;
  }

  get(key) {
    const index = this._hash(key);

    for (const chain of this.keyMap[index]) {
      if (chain[0] === key) {
        return chain[1];
      }
    }
    return undefined;
  }

  keys() {
    const result = [];
    for (const store of this.keyMap) {
      if (store) {
        for (const [k] of store) {
          result.push(k);
        }
      }
    }
    return result;
  }

  values() {
    const result = [];
    for (const store of this.keyMap) {
      if (store) {
        for (const [, value] of store) {
          result.push(value);
        }
      }
    }
    return result;
  }
}

const table = new HashTable();

table.set("hi", 333);
table.set("hi", 322);
table.set("kobl", 125);
table.set("love", 111);

console.log(table.get("hi"));
console.log(table.get("love"));
console.log(table.keys());
console.log(table.values());
