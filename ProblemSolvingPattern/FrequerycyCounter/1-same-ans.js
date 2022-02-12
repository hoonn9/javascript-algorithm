/**
 * Native Loop Solution
 * O(N^2)
 * */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    // 비교 완료된 것은 제거
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// same([1, 2, 3, 2], [9, 1, 4, 4]);

/**
 * Refactored Solution - frequency counter
 * O(N)
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 각 배열의 빈도수를 객체에 저장
  // 배열을 객체에 할당
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    // 키(제곱값)가 없거나, 값(개수)가 다르면 false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
