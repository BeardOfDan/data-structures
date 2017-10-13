var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  
  obj.value = value;
  obj.left = null;
  obj.right = null;
  
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  var current = this.value;

  // Base Case
  if (current === value) {
    return; // don't add a duplicate value
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
  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  } 

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
    BinarySearchTree:
      insert: log(n)
      contains: log(n)
      depthFirstLog : linear
 */
