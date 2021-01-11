class MyArray {
  constructor() {
    this.lenght = 0
    this.data = {}
  }

  get (index) {
    return this.data[index]
  }
  
  push(item) {
    this.data[this.lenght++] = item
    return this.data
  }
}