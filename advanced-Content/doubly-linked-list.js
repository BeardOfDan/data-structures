
// Create a doubly-linked-list, with all the methods of your linked list, and add the following properties:

var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var node = Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node; 
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var result = this.head;

    if (result !== null) {
      this.head = this.head.next;
      
      if (this.head !== null) {
        this.head.prev = null;
      }
    }
    
    return result.value;
  };


  list.contains = function(target) {
    var result = false;
    var current = this.head;

    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next; 
    }
    return result;
  };


  // -----------------------------------
  // --------- new methods -------------
  // -----------------------------------

  // An .addToHead() method which takes a value and adds it to the front of the list.
  list.addToHead = function(value) {
    let node = Node(value);
    
    this.head.prev = node;
    node.next = this.head; 
    this.head = node;
  };


  // A .removeTail() method which removes the last node from the list and returns its value.
  list.removeTail = function() {
    let newLastNode = this.tail.prev;
    
    newLastNode.next = null;
    this.tail.prev = null;
    this.tail = newLastNode;
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  
  node.prev = null;
  node.next = null;

  return node;
};

