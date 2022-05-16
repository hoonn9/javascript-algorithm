function binarySearch(arr, value) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const fi = Math.ceil((i + j) / 2);

    if (arr[fi] === value) {
      return fi;
    } else if (arr[fi] < value) {
      i = fi;
    } else {
      j = fi;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
