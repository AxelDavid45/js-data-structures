class Node {
  constructor (value) {
    this.value = value
    this.prev = null
  }
}

class Queue {
  constructor () {
    this.start = null
    this.end = null
    this.length = 0
  }

  peek () {
    return this.start
  }

  enqueue (value) {
    const node = new Node(value)
    if (this.length === 0) {
      this.start = node
      this.end = node
    } else {
      const holdingPointer = this.end
      this.end = node
      this.end.prev = holdingPointer
    }
    this.length++
    return this
  }

  dequeue () {
    const removed = this.start
    this.start = removed.prev
    this.length--
    return this
  }
}

const queue = new Queue()
console.log(queue)
