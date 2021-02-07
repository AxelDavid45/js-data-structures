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
      this.depth++
      return this
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node
            this.depth++
            return this
          }
          currentNode = currentNode.left
        } else {
          if (!currentNode.rigth) {
            currentNode.rigth = node
            this.depth++
            return this
          }
          currentNode = currentNode.rigth
        }
      }
    }
  }

  search (value) {
    if (value === this.root.value) {
      return this.root
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          currentNode = currentNode.left
          if (currentNode) {
            if (value === currentNode.value) {
              return currentNode
            }
          } else {
            return false
          }
        } else {
          currentNode = currentNode.rigth
          if (currentNode) {
            if (value === currentNode.value) {
              return currentNode
            }
          } else {
            return false
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(101)
tree.insert(90)
tree.insert(80)
tree.insert(92)
tree.insert(105)
tree.insert(200)
tree.insert(300)
