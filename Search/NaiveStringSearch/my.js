function naiveStringSearch(target, pattern) {
  let count = 0;

  for (let i = 0; i <= target.length - pattern.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (target[i + j] !== pattern[j]) {
        break;
      }

      if (j === pattern.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(naiveStringSearch("wowomgzomg", "omg"));
