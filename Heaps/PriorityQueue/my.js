class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);

    this.bubbleUp();
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }

  bubbleUp() {
    let index = this.values.length - 1;

    while (true) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (parentIndex < 0 || this.values[index].priority >= this.values[parentIndex].priority) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  dequeue() {
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

        if (left.priority < curr.priority) {
          swapIndex = leftIndex;
        }
      }

      if (rightIndex < this.values.length) {
        const right = this.values[rightIndex];
        if (right.priority < curr.priority) {
          if (swapIndex) {
            if (this.values[swapIndex].priority > right.priority) {
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

const queue = new PriorityQueue();
queue.enqueue("cold", 5);
queue.enqueue("gunshot", 1);
queue.enqueue("high fever", 3);
queue.enqueue("broken arm", 2);
queue.enqueue("glass in foot", 4);

console.log(queue.values);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
