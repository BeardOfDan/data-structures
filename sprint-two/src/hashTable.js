

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else {

    const bucket = this._storage[index];

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];

      if (tuple[0] === k) {
        tuple[1] = v;
      }
    }

    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  const bucket = this._storage[index];

  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  const bucket = this._storage[index];

  for (let i = 0; i < bucket.length; i++) {
    const tuple = bucket[i];

    if (tuple[0] === k) {
      this._storage[index] = bucket.slice(0, i).concat(bucket.slice(i + 1));
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
    insert: linear (with respect to the bucket)
    retrieve: linear (with respect to the bucket)
    remove: linear (with respect to the bucket)
 */


