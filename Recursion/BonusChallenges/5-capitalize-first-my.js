function capitalizeFirst(arr) {
  if (!arr.length) return [];

  const text = arr[0];
  return [text[0].toUpperCase() + text.slice(1)].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "banana", "china"]));
