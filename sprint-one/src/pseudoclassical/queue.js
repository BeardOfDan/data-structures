var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size() + 1] = value; 
};

Queue.prototype.dequeue = function() {
  var size = this.size();

  if (size > 0) {
    var result = this.storage[1];
    delete this.storage[1];
    var keys = Object.keys(this.storage);
    for (var i = 0; i < keys.length; i++) {
      var newKey = keys[i] - 1;
      this.storage[newKey] = this.storage[keys[i]]; 
    }
    delete this.storage[size];
    return result;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};



