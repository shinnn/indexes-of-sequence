'use strict';

var appendType = require('append-type');
var arrIndexesOf = require('arr-indexes-of');

/*!
 * indexes-of-sequence | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/indexes-of-sequence
*/
function indexesOfSequence(arr, searchValues, fromIndex) {
  [arr, searchValues].forEach(function(arg) {
    if (!Array.isArray(arg)) {
      throw new TypeError('Expected an array, but got ' + appendType(arg) + '.');
    }
  });

  if (searchValues.length === 0) {
    return [];
  }

  var firstValueIndexes = arrIndexesOf(arr, searchValues[0], fromIndex);

  if (firstValueIndexes.length === 0) {
    return [];
  }

  if (searchValues.length === 1) {
    return firstValueIndexes;
  }

  var restSearchValues = searchValues.slice(1);

  return firstValueIndexes.filter(function(index) {
    return restSearchValues.every(function(val, i) {
      return arr[index + i + 1] === val;
    });
  });
}

module.exports = indexesOfSequence;
