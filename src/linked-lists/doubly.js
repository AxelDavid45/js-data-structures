class Node {
  constructor (value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor (value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append (value) {
    const node = new Node(value)
    node.prev = this.tail
    this.tail.next = node
    this.tail = node
    this.length++
    return this
  }

  prepend (value) {
    const node = new Node(value)
    node.next = this.head
    this.head.prev = node
    this.head = node
    this.length++
    return this
  }

  insert (position, value) {
    console.time('insertMethod')
    if (position > this.length) {
      this.append(value)
      return true
    }
    const node = new Node(value)
    let currentNode = this.head
    let previousNode = this.head
    let counter = 0

    while (currentNode.next !== null) {
      if (counter === position - 1) {
        node.next = currentNode.next.next
        previousNode = currentNode
        previousNode.next = node
        this.length++
        console.timeEnd('insertMethod')
        return this
      }
      currentNode = currentNode.next
      counter++
    }
  }
}

const list = new DoublyLinkedList(1)
console.log(list)
