function sameFrequency(a, b) {
  a = a.toString();
  b = b.toString();

  if (a.length !== b.length) {
    return false;
  }

  const counter = {};

  for (const char of a) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (const char of b) {
    if (!counter[char]) {
      return false;
    }

    counter[char] -= 1;
  }
  return true;
}

console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(34, 14));
