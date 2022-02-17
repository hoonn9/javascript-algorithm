function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === val) {
      return i;
    }
  }

  return -1;
}
