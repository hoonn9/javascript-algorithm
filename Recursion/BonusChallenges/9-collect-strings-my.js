function collectStrings(obj) {
  let result = [];

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      result = result.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      result.push(obj[key]);
    }
  }

  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
// ["foo", "bar", "baz"])
