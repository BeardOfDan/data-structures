var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = []; 

  _.extend(newTree, treeMethods); // using jQuery
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
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


/*
 * Complexity: What is the time complexity of the above functions?
  addChild : O(1) - constanct

  contains : O(n) - linear
 */
