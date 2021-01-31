class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor (node) {
    this.head = node
    this.tail = this.head
    this.length = 1
  }

  append (node) {
    this.tail.next = node
    this.length++
  }
}

const node1 = new Node(1)
const list = new SinglyLinkedList(node1)
