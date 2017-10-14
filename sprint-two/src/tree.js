var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.parent = null; 

  _.extend(newTree, treeMethods); // using jQuery
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  this.children.push(child);
  child.parent = this;
};

treeMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  } else {
    
    for (let i = 0; i < this.children.length; i++) {
      let thisChild = this.children[i];
      
      if (thisChild.contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    var parent = this.parent;
    var index = parent.children.indexOf(this);
    parent.children = parent.children.slice(0, index).concat(parent.children.slice(index + 1));
    this.parent = null;
  }
  return this;
};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild : O(1) - constant
  contains : O(n) - linear
  removeFromParent : constant
 */
