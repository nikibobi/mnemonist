/* eslint-disable */
/**
 * Mnemonist Trie Unit Tests
 * ==========================
 */
var assert = require('assert'),
    CritBitTreeMap = require('../critbit-tree-map.js');

var asciitree = require('asciitree');

// function printTree(tree) {
//   var string = asciitree(
//     tree.root,
//     function(node) {

//       if ('critbit' in node)
//         return '' + node.critbit;

//       return '(' + node.key + '•' + node.value + ')';
//     },
//     function(node) {
//       if (!('critbit' in node))
//         return null;

//       return [node.left, node.right];
//     }
//   );

//   console.log(string);
// }

describe('CritBitTreeMap', function() {

  it('should be possible to set values.', function() {
    var tree = new CritBitTreeMap();

    tree.set('abc', 1);

    assert.strictEqual(tree.size, 1);

    tree.set('abc', 2);

    assert.strictEqual(tree.size, 1);

    tree.set('azb', 2);
    tree.set('zzzzzzz', 3);

    // printTree(tree);
  });
});