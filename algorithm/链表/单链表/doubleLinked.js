function Node(value) {
  this.data = value
  this.previous = null
  this.next = null
}

function DoublyList() {
  this._length = 0;
  this.head = null
  this.tail = null
}

/**
 * add
 * @param {*} value 
 */
DoublyList.prototype.add = function (value) {
  const node = new Node(value)

  if (this._length) {
    this.tail.next = node
    node.previous = this.tail
    this.tail = node
  } else {
    this.head = node
    this.tail = node
  }
  this._length++;
  return node
}

/**
 * searchNodeAt
 * @param {*} position 
 */
DoublyList.prototype.searchNodeAt = function (position) {
  let currentNode = this.head,
    length = this._length,
    count = 1,
    message = {
      failure: 'Failure: non-existent node in this list'
    }

  //1st use-case: an invalid position
  if (length === 0 || position < 1 || position > length) {
    return new Error(message.failure)
  }

  //2st use-case: a valid position
  while (count < position) {
    currentNode = currentNode.next
    count++
  }

  return currentNode;
}