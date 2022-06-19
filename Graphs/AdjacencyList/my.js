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
}

const g = new Graph();

g.addVertex("Seoul");
g.addVertex("Tokyo");
g.addVertex("Hanoi");

g.addEdge("Seoul", "Tokyo");
g.addEdge("Seoul", "Hanoi");

console.log(g);

// g.removeEdge("Seoul", "Tokyo");
g.removeVertex("Seoul");
console.log(g);
