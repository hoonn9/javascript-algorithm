function maxSubArraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let max;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + num; j++) {
      sum += arr[j];
    }

    if (typeof max !== "number" || max < sum) {
      max = sum;
    }
  }

  return max;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([], 0));
