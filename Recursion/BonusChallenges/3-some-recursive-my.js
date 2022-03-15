function someRecursive(arr, cb) {
  if (!arr.length) return false;

  if (cb(arr[0])) return true;

  return someRecursive(arr.slice(1), cb);
}

console.log(someRecursive([1, 3], (v) => v % 2 !== 0));
