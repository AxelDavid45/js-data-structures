class HashTable {
  constructor (size) {
    this.data = new Array(size)
  }

  hash (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set (key, value) {
    console.time('setMethod')
    if (!key) { throw new Error('Missing key') }

    if (typeof key !== 'string') { throw new Error('Key must be a string') }

    if (!value) { throw new Error('Missing value') }

    const address = this.hash(key)

    if (!this.data[address]) {
      this.data[address] = []
    }

    this.data[address].push([key, value])
    console.timeEnd('setMethod')
    return this.data
  }

  get (key) {
    console.time('getMethod')
    if (typeof key !== 'string' || !key) {
      throw new Error('Key invalid, validate data type')
    }

    const address = this.hash(key)
    const currentBucket = this.data[address]

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.timeEnd('getMethod')
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  delete (key) {
    console.time('deleteMethod')
    const address = this.hash(key)
    const bucket = this.data[address]
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1)
        }
      }
      console.timeEnd('deleteMethod')
      return true
    }
    console.timeEnd('deleteMethod')
    return undefined
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('Mariana', 1345)
myHashTable.set('Juan', 1345)
myHashTable.set('Axel', 1345)
myHashTable.set('Diego', 1345)
myHashTable.set('Jesus', 1345)
myHashTable.set('Adrian', 1345)
myHashTable.set('Maria Jose', 1345)
myHashTable.set('Yadira', 1345)
myHashTable.set('Karla', 1345)
myHashTable.set('Diana', 1345)
