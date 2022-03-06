function fib(len) {
  let index = 0;
  let prev = 0;

  function helper(num) {
    if (index++ === len - 1) return num;

    const sum = prev + num;
    prev = num;

    return helper(sum);
  }

  return helper(1);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(35));
