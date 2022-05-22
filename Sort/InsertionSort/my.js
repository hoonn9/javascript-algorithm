function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let targetIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[targetIndex]) break;
      else {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        targetIndex = j;
      }
    }

    console.log(arr);
  }

  return arr;
}

// console.log(insertionSort([34, 22, 10, 19, 17]));
// console.log(insertionSort([5, 21, 10, 2, 7]));
