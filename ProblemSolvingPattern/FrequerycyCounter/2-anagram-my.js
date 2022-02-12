function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  function mappingFreqCounter(str) {
    const freqCounter = {};

    for (const char of str) {
      freqCounter[char] = (freqCounter[char] || 0) + 1;
    }

    return freqCounter;
  }

  const freqCounter1 = mappingFreqCounter(str1);
  const freqCounter2 = mappingFreqCounter(str2);

  for (const key in freqCounter1) {
    if (!freqCounter2[key] || freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("anagram", "nagaram"));
