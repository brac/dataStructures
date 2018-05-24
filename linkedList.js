// jshint asi:true

// An exercise in understading a linked list as a data structure
class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0;
  }

  add(value){
    let node = new Node(value)

    // if this is the first node, then first node is head and tail
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node
    // else add the new node to the end of the list
    } else {
      this.tail.next = node;
      this.tail = this.tail.next
    }
    this.length++
  }

  addHead(value){
    let node = new Node(value)
    if (!this.head && !this.tail) {
      this.add(value)
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
  }

  insertAfter(value, target){

  }

  contains(value){
    let node = this.head
    while (node) {
      if (node.value === value) {
        return true
      }
      node = node.next;
    }
    return false;
  }

  remove(value){
    // First comfirm the entry is in the list
    if (this.contains(value)) {
      // Begin at the start of the list
      let current = this.head
      let previous = this.head

      // Check each node
      while (current){
        // Match the value to be removed in the list
        if (current.value === value) {
          // If it is the head...
          if (this.head === current) {
            // reset the second item to be the new head
            this.head = this.head.next
            this.length--
            return
          }
          // if it is the tail...
          if (this.tail === current) {
            // reset the tail to the previous element
            this.tail = previous
          }

          // Unlink previous next pointer from current, making it point to
          //     the current.next node, thereby removing the current node
          //     from the list
          previous.next = current.next
          this.length--
          return
        }

        // look at the next node
        previous = current
        current = current.next
      }
    }
  }

  size(){
    return this.length
  }
}

const amazingrace = new LinkedList()
amazingrace.add('santa rosa, california')
amazingrace.add('prauge, poland')
amazingrace.add('vancouver, british columbia')
amazingrace.add('madison, wisconson')
amazingrace.add('oakland, california')
console.log(amazingrace)