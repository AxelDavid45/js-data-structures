class MyArray {
  constructor () {
    this.lenght = 0
    this.data = {}
  }

  get (index) {
    return this.data[index]
  }

  push (item) {
    this.data[this.lenght++] = item
    return this.data
  }

  pop () {
    if (this.lenght > 0) {
      const lastItem = this.data[this.lenght - 1]
      delete this.data[this.lenght - 1]
      this.lenght--
      return lastItem
    }
    return this.data
  }

  delete (index) {
    const deleted = this.data[index]
    this.shift(index)
    return deleted
  }

  shift (index) {
    for (let i = index; i < this.lenght - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.lenght - 1]
    this.lenght--
  }
}

// Usage
const myArray = new MyArray()
console.log(myArray.push(1))
console.log(myArray.push(2))
console.log(myArray.push(3))
console.log(myArray.push(4))
console.log(myArray.delete(1))
console.log(myArray.data)
