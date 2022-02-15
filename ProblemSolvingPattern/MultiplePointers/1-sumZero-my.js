function sumZero(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2) + 1; i++) {
    const p1 = i;
    let p2 = arr.length - 1 - i;

    if (p2 === p1) {
      p2 -= 1;
    }
    if (arr[p1] + arr[p2] === 0) {
      return [arr[p1], arr[p2]];
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-32, -10, 9, 10, 12, 14]));
