class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }
  pop() {
    if (!this.length) {
      return undefined;
    }

    let curr = this.head;
    let pre;

    while (curr.next != null) {
      pre = curr;
      curr = curr.next;
    }

    if (pre) {
      pre.next = null;
      this.tail = pre;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return curr;
  }
  shift() {
    if (!this.length) {
      return undefined;
    }

    const head = this.head;
    this.head = head.next;

    if (this.head == null) {
      this.tail = null;
    }

    this.length--;

    return head;
  }

  unshift(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;

    if (this.tail == null) {
      this.tail = this.head;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || this.length <= index) {
      return null;
    }

    let cnt = 0;
    let curr = this.head;

    while (index > cnt++) {
      curr = curr.next;
    }

    return curr;
  }

  set(index, value) {
    const node = this.get(index);

    if (node == null) {
      return false;
    }

    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(value);
    }
    if (index === this.length) {
      return !!this.push(value);
    }

    const node = new Node(value);
    const pre = this.get(index - 1);

    if (pre == null) {
      return false;
    }

    node.next = pre.next;
    pre.next = node;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const pre = this.get(index - 1);
    const node = pre.next;
    pre.next = node.next;

    this.length--;

    return node;
  }

  reverse() {
    let curr = this.head;
    let prevNode = null;
    let nextNode;

    this.head = this.tail;
    this.tail = curr;

    for (let i = 0; i < this.length; i++) {
      nextNode = curr.next;
      curr.next = prevNode;
      prevNode = curr;
      curr = nextNode;
    }

    return this;
  }

  print() {
    const result = [];

    let curr = this.head;
    while (curr) {
      console.log(curr);
      result.push(curr.value);
      curr = curr.next;
    }
    console.log(result);
  }
}

// const first = new Node("hi");

// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

const list = new SinglyLinkedList();

list.push("hello");
list.push("world");
// list.push("linked");

// list.shift();
// list.shift();
// list.unshift("dasdsa");
// list.unshift("2");

console.log(list.set(0, "1"));
console.log(list.set(1, "2"));
console.log(list.insert(0, "0"));
// console.log(list.insert(-1, "zz"));
// console.log(list.remove(2));
// console.log(list);
list.print();

console.log(list.reverse());
list.print();
