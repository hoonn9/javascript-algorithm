// ❌
function findLongestSubstring(str) {
  let length = 0;
  let counter = {};
  let index = 0;
  let temp = 0;

  while (index < str.length) {
    if (counter[str[index]]) {
      if (length < temp) length = temp;
      counter = {};
      temp = 0;
    }
    counter[str[index]] = 1;
    index++;
    temp++;
  }

  return length;
}

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
