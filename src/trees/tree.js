class Node {
  constructor (value) {
    this.value = value
    this.rigth = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
    this.depth = 0
  }

  insert (value) {
    const node = new Node(value)
    if (this.root === null) {
      this.root = node
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node
            return this
          }
          currentNode = currentNode.left
        } else {
          if (!currentNode.rigth) {
            currentNode.rigth = node
            return this
          }
          currentNode = currentNode.rigth
        }
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
