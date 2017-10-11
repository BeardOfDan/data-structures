var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size() + 1] = value;
  };

  someInstance.pop = function() {
    var size = someInstance.size();
    var result;
    if (size > 0) {
      result = storage[size];
      delete storage[size];
    }
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
