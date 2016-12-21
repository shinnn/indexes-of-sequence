'use strict';

const indexOfSequence = require('.');
const test = require('tape');

test('indexOfSequence()', t => {
  t.deepEqual(
    indexOfSequence(['a', 'b', 'c', 'b', 'c'], ['b', 'c']),
    [1, 3],
    'should return all indexes of the search sequence.'
  );

  const arr = [1, 3, '1', '3', 1, 1, 3];
  const searches = [1, 3];

  t.deepEqual(
    indexOfSequence(arr, searches, 1),
    [5],
    'should support the third `fromIndex` parameter.'
  );

  t.deepEqual(
    arr,
    [1, 3, '1', '3', 1, 1, 3],
    'should not mutate the array passed to the first parameter.'
  );

  t.deepEqual(
    searches,
    [1, 3],
    'should not mutate the array passed to the second parameter.'
  );

  t.deepEqual(
    indexOfSequence(['foo', 'bar'], ['bar'], -9999),
    [1],
    'should treat negative `fromIndex` as 0.'
  );

  t.deepEqual(
    indexOfSequence(['Hello', 'world'], ['Hello', Buffer.from('world')]),
    [],
    'should return an empty array when the it cannot find the sequence anywhere.'
  );

  t.deepEqual(
    indexOfSequence([], ['p']),
    [],
    'should return an empty array when the first argument is an empty array.'
  );

  t.deepEqual(
    indexOfSequence(['q'], []),
    [],
    'should return an empty when the second argument is an empty array.'
  );

  t.throws(
    () => indexOfSequence(1, ['a']),
    /^TypeError.*Expected an array, but got 1 \(number\)\./,
    'should throw a type error when the first argument is a non-array value.'
  );

  t.throws(
    () => indexOfSequence([true], new Map()),
    /^TypeError.*Expected an array, but got \[object Map] \(object\)\./,
    'should throw a type error when the second argument is a non-array value.'
  );

  t.throws(
    () => indexOfSequence(['a'], ['b'], 'c'),
    /^TypeError.*Expected an index where to start the searching forwards in the array, but got c \(string\)\./,
    'should throw a type error when the third argument is not a number.'
  );

  t.throws(
    () => indexOfSequence(['a'], ['b'], ''),
    /^TypeError.*Expected an index where to start the searching forwards in the array, but got an empty string\./,
    'should throw a type error when the third argument is an empty string.'
  );

  t.end();
});
