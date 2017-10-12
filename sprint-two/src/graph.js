

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// helper function: returns an array without the element at a given index
const removeElement = function(array, index) {
  return array.slice(0, index).concat(array[index + 1]);
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.indexOf(node) !== -1) {
    return true;
  }
  return false;
};


// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  const index = this.nodes.indexOf(node);

  if (index !== -1) {   
    // remove edges that connect to this node
    const value = this.nodes[index];
    let remEdges = [];

    this.edges.forEach(function(edge) { 
      if (edge.indexOf(value) !== -1) {
        remEdges.push(edge);
      } 
    });

    for (let i = 0; i < remEdges.length; i++) {
      this.removeEdge(remEdges[i][0], remEdges[i][1]);
    }

    // remove the node
    this.nodes = removeElement(this.nodes, index);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.edges.length; i++) {
    const thisEdge = this.edges[i];
    const from = thisEdge[0];
    const to = thisEdge[1];

    if ((fromNode === from) || (fromNode === to)) {
      if ((toNode === to) || (toNode === from)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode) || this.hasEdge(toNode, fromNode)) {
    return; // skip
  }
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode) || this.hasEdge(toNode, fromNode)) {
    const index = this.edges.indexOf([fromNode, toNode]) || this.edges.indexOf([toNode, fromNode]);
    this.edges = removeElement(this.edges, index);
  } 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
    addNode: constant
    contains: linear
    removeNode: linear (the sum of the inputs (also linear))
    hasEdge: linear
    addEdge: linear
    removeEdge: linear
    forEachNode: linear
 */


