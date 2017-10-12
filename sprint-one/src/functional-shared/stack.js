var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = {};
  obj.storage = {};

  extend(obj, stackMethods);
 
  return obj;
};


var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.size() + 1] = value;
};

stackMethods.pop = function() {
  let size = this.size();

  if (size > 0) {
    let result = this.storage[size];
    delete this.storage[size];
    return result;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};


var extend = function(destination, source) {
  for (key in source) {
    destination[key] = source[key];
  }

  return destination;
};
