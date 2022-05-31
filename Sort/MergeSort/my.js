function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }

  if (i < arr1.length) result.push(...arr1.slice(i));
  else result.push(...arr2.slice(j));

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  return merge(
    mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
    mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length))
  );
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([2, 1, 9, 76, 4]));
