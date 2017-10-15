

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index) || [];
  let count = 0;
  

  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      let oldValue = tuple[1];
      // bucket[i] = [k, v];
      tuple[1] = v;
      return oldValue;
    }
    count++;
  }

  // insert new thing

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  



  // resize code goes here

  if (count === (this._limit * .75)) {
    var oldStorage = this._storage;
    this._storage = LimitedArray(this._limit * 2);
    this._limit *= 2;

    //populate new storage
    //for (let key in oldStorage) {
    oldStorage.each(function(value, index, collection) { 
      var bucket = oldStorage.get(index);
  
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple !== undefined) {
          this._storage.set(index, tuple);

        }
      }
    });
  }


  // this._storage.each(function(tuple, index) {
  //   if (tuple !== undefined) {
  //     if (tuple[0] === k) {
  //       // tupple[1] = v;
  //       this._storage.set(index, [k, v]);
  //       return;
  //     }
  //     count++;
  //   }
  // });

  // if (count === (this._limit * .75)) {
  //   var oldStorage = this._storage;
  //   this._storage = LimitedArray(this._limit * 2);
  //   this._limit *= 2;

  //   //populate new storage
  //   //for (let key in oldStorage) {
  //   oldStorage.each(function(value, index, collection) { 
  //     var bucket = oldStorage.get(index);
  
  //     for (var i = 0; i < bucket.length; i++) {
  //       var tuple = bucket[i];
  //       if (tuple !== undefined) {
  //         this._storage.set(index, tuple);

  //       }
  //     }
  //   });
  // }
  

  // if (this._storage.get(index) === undefined) {
  //   this._storage.set(index, [[k, v]]);
  // } else {

  //   const bucket = this._storage.get(index);

  // for (let i = 0; i < bucket.length; i++) {
  //   const tuple = bucket[i];

  //   if (tuple[0] === k) {
  //     tuple[1] = v;
  //   }
  // }



  // // this._storage[index].push([k, v]);
  // this._storage.set(index, [k, v]);


      //  ========================================================================================================================


  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return undefined;
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);



  // const bucket = this._storage[index];
  var bucket = this._storage.get(index);

      
      //  ========================================================================================================================



  if (bucket !== undefined) {
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];

      if (tuple[0] === k) {
        bucket.splice(i, 1);
        this._storage.set(index, bucket); 


      //  ========================================================================================================================


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
  if ((size < (this._limit / 4)) && (this._limit >= 8)) {
    // shrink the hash table

    // update the size of limit
    this._limit /= 2;

    const oldStorage = this._storage;
    this._storage = LimitedArray(this._limit);

    let self = this;

    // iterate through oldStorage and add it to the current hash table
    oldStorage.each(function(value, index, collection) {
      const tuple = value;
      if ((tuple !== undefined) && (tuple.length > 0)) {
        if (tuple[0].length > 0) {
          self.insert(...tuple);
        }
      }
    });
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
    insert: linear (with respect to the bucket)
    retrieve: linear (with respect to the bucket)
    remove: linear (with respect to the bucket)
 */


