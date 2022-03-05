// Native O(N^2)
function minSubArrayLen(arr, num) {
  let minLength;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < (minLength || arr.length); j++) {
      sum += arr[i + j];

      if (sum >= num) {
        minLength = Math.min(j + 1, minLength || Infinity);
        break;
      }
    }
  }

  return minLength || 0;
}

// Refactor O(N)
function minSubArrayLen(arr, num) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < arr.length) {
    if (sum >= num) {
      minLength = Math.min(minLength, right - left);
      left += 1;
      sum -= arr[left];
    } else if (sum < num) {
      right += 1;
      sum += arr[right];
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
