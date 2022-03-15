// ❌
function flatten(arr) {
  const index = arr.findIndex((v) => Array.isArray(v));

  if (index < 0) return [];
  return flatten(arr.slice(index + 1)).concat(arr.slice(0, index - 1));
}

console.log(flatten([[1, 2, 3], [5]]));
