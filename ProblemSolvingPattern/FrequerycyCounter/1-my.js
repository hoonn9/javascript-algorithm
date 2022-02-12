function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  /*
  // 1. not sorting
  for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
          if (arr2[j] === Math.pow(arr1[i], 2)) {
               break;
          }

          if (j === arr1.length - 1) {
              return false;
          }
      }
  }

  return true;
  */

  // 2. functonal

  arr1.sort();
  arr2.sort();

  return arr1.every((v1) => arr2.some((v2) => v2 === Math.pow(v1, 2)));
}

console.log(same([1, 2, 3], [4, 1, 9]));
