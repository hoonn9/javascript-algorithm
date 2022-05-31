// function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
//   function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }

//   let p = arr[startIndex];
//   let pivotIndex = startIndex + 1;

//   for (let i = startIndex + 1; i < arr.length; i++) {
//     if (p >= arr[i]) {
//       swap(arr, pivotIndex, i);
//       pivotIndex++;
//     }
//   }
//   swap(arr, pivotIndex - 1, startIndex);

//   return pivotIndex - 1;
// }

// First Version
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const index = pivot(arr, start, end);

    quickSort(arr, start, index);
    quickSort(arr, index + 1, end);
  }
  return arr;
}

const arr = [5, 2, 1, 8, 4, 7, 6, 3];
// console.log(pivot(arr));

2, 1, 4, 3, 5, 6, 7, 8;

const arr2 = [26, 23, 27, 44, 17, 47, 39, 42, 43, 1];
// console.log(pivot(arr2));

console.log(quickSort(arr2));
