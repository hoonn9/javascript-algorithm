function fib(n) {
  if (n <= 2) return 1;
  console.log("fib", n);
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(35));
