class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;

    let index = this.adjacencyList[vertex1].findIndex((v1) => v1 === vertex2);

    if (index > -1) {
      this.adjacencyList[vertex1].splice(index, 1);
    }

    index = this.adjacencyList[vertex2].findIndex((v2) => v2 === vertex1);

    if (index > -1) {
      this.adjacencyList[vertex2].splice(index, 1);
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;

    for (const edge of [...this.adjacencyList[vertex]]) {
      this.removeEdge(vertex, edge);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(vertex) {
    const result = [];
    const visited = {};
    const list = this.adjacencyList;
    function helper(vertex) {
      if (!vertex) return;
      result.push(vertex);
      visited[vertex] = true;

      for (const chain of list[vertex]) {
        if (!visited[chain]) helper(chain);
      }
    }
    helper(vertex);

    return result;
  }

  depthFirstIterative(vertex) {
    const stack = [];
    stack.push(vertex);

    const visited = {};
    const result = [];

    while (stack.length) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;

        for (const chain of this.adjacencyList[vertex]) {
          stack.push(chain);
        }
      }
    }

    return result;
  }

  breadthFirst(vertex) {
    const queue = [];
    queue.push(vertex);

    const visited = {
      [vertex]: true,
    };
    const result = [];

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      for (const chain of this.adjacencyList[vertex]) {
        if (!visited[chain]) {
          visited[chain] = true;
          queue.push(chain);
        }
      }
    }

    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));
console.log(g.breadthFirst("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
