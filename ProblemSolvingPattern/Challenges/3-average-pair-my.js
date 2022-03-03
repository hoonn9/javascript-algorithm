function averagePair(array, avg) {
  array.sort();

  let p1 = 0;
  let p2 = array.length - 1;

  while (p2 > p1) {
    const currAvg = (array[p1] + array[p2]) / 2;
    if (currAvg === avg) {
      return true;
    } else if (currAvg < avg) {
      p1++;
    } else {
      p2--;
    }
  }

  return false;
}

averagePair([1, 2, 3], 2.5);
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
averagePair([-1, 0, 3, 4, 5, 6], 4.1);
averagePair([], 4);
