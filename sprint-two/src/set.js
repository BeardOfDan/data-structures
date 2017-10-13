var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  var result = false;  
  if (this._storage[item] !== undefined) {
    result = true;
  }
  return result;
};

setPrototype.remove = function(item) {
  if (this._storage[item] !== undefined) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

.add - constant
.contains - constant
.remove - constant

 */
