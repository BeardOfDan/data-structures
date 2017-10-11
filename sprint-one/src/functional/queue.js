var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size() + 1] = value;
  };

  someInstance.dequeue = function() {
    var size = someInstance.size();
    var result;
    if (size > 0) {
      result = storage[1];
      delete storage[1];
      var keys = Object.keys(storage);
      for (var i = 0; i < keys.length; i++) {
        var newKey = keys[i] - 1;
        storage[newKey] = storage[keys[i]];      
      }
      delete storage[size];
    }
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
