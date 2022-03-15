function flatten(arr) {
  let result = [];

  for (const v of arr) {
    if (Array.isArray(v)) {
      result = result.concat(flatten(v));
    } else {
      result.push(v);
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, 4, [5, 6, [3]]]));
