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
    const keys = Object.keys(this.data)
    if (keys.length > 0) {
      delete this.data[keys[keys.length - 1]]
    }
    return this.data
  }
}

const myArray = new MyArray()
console.log(myArray.push(1))
console.log(myArray.pop())
console.log(myArray.pop())
