function getDigit(num, place) {
  return Math.floor((num % 10 ** (place + 1)) / 10 ** place);
}

function digitCount(num) {
  return num.toString().length;
}

function mostDigits(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    const count = digitCount(arr[i]);
    if (max < count) max = count;
  }

  return max;
}

function radixSort(arr) {
  const most = mostDigits(arr);

  for (let i = 0; i < most; i++) {
    const temp = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      temp[getDigit(arr[j], i)].push(arr[j]);
    }

    arr = temp.reduce((prev, curr) => prev.concat(curr), []);
  }

  return arr;
}

// console.log(getDigit(12345, 0));
// console.log(getDigit(12345, 1));
// console.log(getDigit(12345, 2));
// console.log(getDigit(12345, 3));
// console.log(getDigit(12345, 4));
// console.log(getDigit(12345, 5));

// console.log(digitCount(0));
// console.log(digitCount(123));
// console.log(digitCount(112512));

// console.log(mostDigits([1234, 56, 7]));

const arr3 = [26, 23, 1243, 1245, 333, 27, 44, 17, 1, 5, 47, 39, 42, 43, 222, 55555];

console.log(radixSort(arr3));
