describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // tests for new functionality

  it('should have a parent property with the correct value', function() {
    expect(tree.parent).to.equal(null);
    tree.addChild(1);
    expect(tree.children[0].parent).to.equal(tree);
    tree.children[0].addChild(2);
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
  });

  it('should dissasociate the parent with the child in both directions when removeFromParent is called', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.children[0].addChild(3);
    let child = tree.children[0].removeFromParent();
    expect(child.parent).to.equal(null);
    expect(tree.children[0].value).to.equal(2);
    expect(child.children[0].parent).to.equal(child);
  });

  it('should not throw an error when removeFromParent is called on a tree with 1 or 0 nodes', function() {
    // 0 values
    let current = tree.removeFromParent();
    expect(tree.parent).to.equal(null);
    expect(tree.children).to.eql([]);

    // 1 value
    tree.addChild(1);
    expect(tree.parent).to.equal(null);
    current = tree.children[0].removeFromParent();
    expect(current.parent).to.equal(null);
  });

});
