
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
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var result = this.head;
    this.head = this.head.next;
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


  // An .addToHead() method which takes a value and adds it to the front of the list.
  list.addToHead = function(value) {

  };


  // A .removeTail() method which removes the last node from the list and returns its value.
  list.removeTail = function() {
    
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

// Note: each node object will need to have a new .previous property pointing to the node behind it (or to null when appropriate); 
// this is what makes it a doubly-linked list

