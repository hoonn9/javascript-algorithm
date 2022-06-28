// Recursive Solution (not a dp)
function fib(n) {
  if (n < 3) return 1;
  return fib(n - 1) + fib(n - 2);
}

const memo = {};
// Memoization
function fib(n) {
  if (n < 3) return 1;

  if (memo[n]) {
    return memo[n];
  }

  const sum = fib(n - 1) + fib(n - 2);
  memo[n] = sum;
  return sum;
}

// Tabulation
function fib(n) {
  if (n < 3) return 1;

  const table = [undefined, 1, 1];

  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}

// Maximum call stack size exceeded
// console.log(fib(10000));

// Infinity
console.log(fib_table(10000));
