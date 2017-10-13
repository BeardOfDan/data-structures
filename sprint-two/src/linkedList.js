var LinkedList = function() {
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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail:  constant
    removeHead: constant
    contains:   linear
 */
