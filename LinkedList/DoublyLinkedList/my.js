class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;

    if (this.head == null) {
      this.head = node;
      this.tail = node;

      return this;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;

    return this;
  }

  pop() {
    if (this.head == null) return undefined;
    const node = this.tail;

    if (this.length-- === 1) {
      this.head = null;
      this.tail = null;

      return node;
    }

    node.prev.next = null;
    this.tail = node.prev;
    node.prev = null;

    return node;
  }

  shift() {
    if (this.head == null) return undefined;

    const node = this.head;

    if (this.length-- === 1) {
      this.head = null;
      this.tail = null;

      return node;
    }

    this.head = node.next;
    this.head.prev = null;
    node.next = null;

    return node;
  }

  unshift(value) {
    const node = new Node(value);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      const prevHead = this.head;

      this.head = node;
      this.head.next = prevHead;
      prevHead.prev = this.head;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (this.head == null || index < 0 || index > this.length - 1) return null;

    const half = Math.floor(this.length / 2);

    if (half >= index) {
      let cnt = 0;
      let curr = this.head;

      while (cnt++ !== index) {
        curr = curr.next;
      }

      return curr;
    } else {
      let cnt = this.length - 1;
      let curr = this.tail;

      while (cnt-- !== index) {
        curr = curr.prev;
      }
      return curr;
    }
  }

  set(index, value) {
    const node = this.get(index);
    if (node == null) return false;

    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    const prev = this.get(index - 1);
    if (prev == null) return false;

    const node = new Node(value);

    const next = prev.next;

    (prev.next = node), (node.prev = prev);
    (next.prev = node), (node.next = next);

    this.length++;

    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    if (node == null) return undefined;

    const prev = node.prev;
    const next = node.next;

    (prev.next = next), (next.prev = prev);
    (node.prev = null), (node.next = null);

    this.length--;

    return node;
  }
  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    for (let i = 0; i < this.length; i++) {
      const prev = curr.prev;
      const next = curr.next;

      curr.next = prev;
      curr.prev = next;

      curr = curr.prev;
    }

    return this;
  }
}

const list = new DoublyLinkedList();

list.push("hello");
list.push("world");
list.push("!");

list.insert(3, "foo");
// console.log(list.remove(3));
console.log(list.reverse());
