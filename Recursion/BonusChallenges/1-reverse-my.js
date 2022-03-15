function reverse(str) {
  if (!str.length) return str;
  const text = str.slice(1, str.length);

  return reverse(text) + str[0];
}

console.log(reverse("abcde"));
