function areThereDuplicates(...args) {
  const counter = {};

  for (const v of args) {
    counter[v] = (counter[v] || 0) + 1;

    if (counter[v] > 1) {
      return true;
    }
  }
  return false;
}

// Multiple Pointer?
function areThereDuplicates(...args) {
  let p1 = 0;

  for (let p2 = 1; p2 < args.length; p2++) {
    console.log(args[p1], args[p2]);
    if (args[p1] === args[p2]) {
      p1++;
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
