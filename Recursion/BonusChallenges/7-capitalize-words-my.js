function capitalizeWords(arr) {
  const result = [];
  function helper(arr) {
    if (!arr.length) return;

    result.push(arr[0].toUpperCase());
    helper(arr.slice(1));
  }
  helper(arr);
  return result;
}

console.log(capitalizeWords(["car", "banana", "china"]));
