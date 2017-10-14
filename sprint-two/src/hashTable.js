

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var count = 0;
  
  let size = Object.keys(this._storage).length;

  for (let key in this._storage) {
    if (this._storage[key] !== undefined) {
      count++;
    }
  }

  if (count === (this._limit * .75)) {
    var oldStorage = this._storage;
    this._storage = LimitedArray(this._limit * 2);
    this._limit *= 2;

    //populate new storage
    for (let key in oldStorage) { 
      var bucket = oldStorage[key];
  
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple !== undefined) {
          this.insert(tuple[0], tuple[1]);              
        }
      }
    }
  }
  
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

  if (bucket !== undefined) {
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  const bucket = this._storage[index];

  if (bucket !== undefined) {
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];

      if (tuple[0] === k) {
        this._storage[index] = bucket.slice(0, i).concat(bucket.slice(i + 1));
      }
    }
  }

  // -----------------------------------------
  // if it is too small, shrink the hash table
  // -----------------------------------------

  // get the size of the hash table
  let size = 0;
  this._storage.each(function(value, index, collection) {
    if (value !== undefined) {
      size++;
    }
  });

  // check if it is too small
  if ((size <= (this._limit / 4)) && (this._limit >= 8)) {
    // shrink the hash table

    const oldStorage = this._storage;
    this._storage = LimitedArray(this._limit / 2);

    // update the size of limit
    this._limit /= 2;

    // iterate through oldStorage and add it to the current hash table
    oldStorage.each(function(value, index, collection) {
      const tuple = value;
      this._storage.insert(...tuple);
    });
  }

};


// To prevent excessive collisions, make your hashTable double in size as soon as 75 percent of the spaces have been filled
// To save space, make sure the hashTable halves in size when space usage falls below 25 percent



/*
 * Complexity: What is the time complexity of the above functions?
    insert: linear (with respect to the bucket)
    retrieve: linear (with respect to the bucket)
    remove: linear (with respect to the bucket)
 */


