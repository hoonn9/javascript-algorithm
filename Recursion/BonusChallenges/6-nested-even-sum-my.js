function nestedEvenSum(obj) {
  let sum = 0;
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherobj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(nestedEvenSum(obj1));
