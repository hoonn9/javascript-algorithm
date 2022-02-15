function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }

  let p1 = 0;
  let p2 = 1;

  while (p2 < arr.length) {
    if (arr[p1] !== arr[p2]) {
      arr[++p1] = arr[p2];
    }
    p2++;
  }

  return p1 + 1;
}

console.log(countUniqueValues([]));

// function countUniqueValues(arr) {
//   let result = 0;
//   let prev;
//   for (let i = 0; i < arr.length; i++) {
//     if (prev !== arr[i]) {
//       result++;
//     }
//     prev = arr[i];
//   }
//   return result;
// }

// console.log(countUniqueValues([-1, 1, 1, 1, 1, 2]));
