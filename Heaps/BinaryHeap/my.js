class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp();
  }

  swap(i, j) {
    this.values[i] = this.values[i] + this.values[j];
    this.values[j] = this.values[i] - this.values[j];
    this.values[i] = this.values[i] - this.values[j];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    // let parentIndex = Math.floor((index - 1) / 2);

    while (true) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (parentIndex < 0 || this.values[index] <= this.values[parentIndex]) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  extractMax() {
    const extracted = this.values[0];
    const lastNode = this.values.pop();

    if (!this.values.length) return extracted;
    this.values[0] = lastNode;

    let index = 0;
    while (true) {
      const curr = this.values[index];
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let swapIndex;
      if (leftIndex < this.values.length) {
        const left = this.values[leftIndex];

        if (left > curr) {
          swapIndex = leftIndex;
        }
      }

      if (rightIndex < this.values.length) {
        const right = this.values[rightIndex];
        if (right > curr) {
          if (swapIndex) {
            if (this.values[swapIndex] < right) {
              swapIndex = rightIndex;
            }
          } else {
            swapIndex = rightIndex;
          }
        }
      }

      if (swapIndex == null) break;
      this.swap(index, swapIndex);
      index = swapIndex;
    }

    return extracted;
  }
}

const heap = new MaxBinaryHeap();
// [41,39,33,18,27,12,55]
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// [55,39,41,18,27,12,33]
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
