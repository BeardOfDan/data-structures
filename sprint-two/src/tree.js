var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = []; 

  extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = new Child(value);
  this.children.push(child);
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

var Child = function(value) {
  let obj = {};
  obj.value = value;
  obj.children = [];

  extend(obj, treeMethods);

  return obj;
};

var extend = function(destination, source) {
  for (key in source) {
    destination[key] = source[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addChild : O(1) - constanct

  contains : O(n) - linear
 */
