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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight,
    });
    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight,
    });
  }
  dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();

    for (const vertex in this.adjacencyList) {
      if (start === vertex) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (queue.values.length) {
      const curr = queue.dequeue();

      if (curr.value === end) {
        break;
      }

      for (const chain of this.adjacencyList[curr.value]) {
        if (previous[curr.value] === chain.node) {
          continue;
        }
        let distance = chain.weight;
        let prevVertex = previous[curr.value];
        let currValue = curr.value;

        while (prevVertex) {
          const node = this.adjacencyList[prevVertex].find((v) => v.node === currValue);
          if (node) {
            distance += node.weight;
          }
          currValue = prevVertex;
          prevVertex = previous[prevVertex];
        }

        if (distance < distances[chain.node]) {
          distances[chain.node] = distance;
          previous[chain.node] = curr.value;
          queue.enqueue(chain.node, distance);
        }
      }
    }

    const result = [];
    let curr = end;

    while (previous[curr]) {
      result.push(curr);
      curr = previous[curr];
    }
    result.push(start);

    return result.reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));

// ["A", "C", "D", "F", "E"]
