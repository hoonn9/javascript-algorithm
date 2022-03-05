function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  let temp = max;
  for (let i = 1; i < arr.length - num + 1; i++) {
    temp = temp - arr[i - 1] + arr[i + num - 1];
    max = Math.max(temp, max);
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0 - 2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
