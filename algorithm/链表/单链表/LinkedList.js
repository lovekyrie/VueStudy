class listNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//单链表插入、删除、查找
class LinkedList {
  constructor(val) {
    val = val === undefined ? 'head' : val;
    this.head = new listNode(val)
  }

  //找val值节点，没有找到返回-1
  findByVal(val) {
    let current = this.head
    while (current !== null && current.val !== val) {
      current = current.next
    }
    return current ? current : -1
  }

  //插入节点，在值val后
  insert(newVal, val) {
    let current = this.findByVal(val)
    if (current === -1) return false
    let newNode = new listNode(newVal)
    newNode.next = current.next
    current.next = newNode
  }

  //获取值为nodeVal的前一个节点，找不到为-1，参数是val
  // 适用于链表中无重复节点
  findNodePreByVal(val) {
    let current = this.head
    while (current.next !== null && current.next.val !== val) {
      current = current.next
    }
    return current ? current : -1
  }

  // 根据index查找当前节点，参数为index
  // 可以作为比较链表是否有重复节点
  findByIndex(index) {
    let current = this.head,
      pos = 1;
    while (current.next !== null && index !== pos) {
      current = current.next;
      pos++;
    }
    return (current && pos === index) ? current : -1
  }

  // 删除某一个节点，删除失败返回false
  remove(nodeVal) {
    if (nodeVal === 'head') return false
    let needRemoveNode = this.findByVal(nodeVal)
    if (needRemoveNode === -1) return false
    let preveNode = this.findNodePreByVal(nodeVal)

    preveNode.next = needRemoveNode.next
  }

  // 遍历节点
  disPlay() {
    let res = new Array()
    let current = this.head
    while (current !== null) {
      res.push(current.val)
      current = current.next
    }
    return res
  }

  // 在链表末尾插入一个新节点
  push(nodeVal) {
    let current = this.head
    let node = new listNode(nodeVal)
    while (current.next !== null)
      current = current.next
    current.next = node
  }

  //在头部插入
  frontPush(nodeVal) {
    let newNode = new listNode(nodeVal)
    this.insert(newNode, 'head')
  }
}

let demo = new LinkedList()
// console.log(demo.disPlay())
demo.push('1232')
demo.insert(123, 'head')
demo.push('last value')
demo.frontPush('start')

// console.log(demo.disPlay())
demo.remove('head')
console.log(demo.disPlay())