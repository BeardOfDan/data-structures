var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  //Base Case
  var current = this.value;

  if (current === value) {
    return;
  } else if (value < current) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  var current = this.value;
  
  if (current === target) {
    return true;
  } else if (target < current) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(target);
    }
  } else {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(target);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
