# indexes-of-sequence

[![NPM version](https://img.shields.io/npm/v/indexes-of-sequence.svg)](https://www.npmjs.com/package/indexes-of-sequence)
[![Bower version](https://img.shields.io/bower/v/indexes-of-sequence.svg)](https://github.com/shinnn/indexes-of-sequence/releases)
[![Build Status](https://travis-ci.org/shinnn/indexes-of-sequence.svg?branch=master)](https://travis-ci.org/shinnn/indexes-of-sequence)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/indexes-of-sequence.svg)](https://coveralls.io/r/shinnn/indexes-of-sequence)
[![dependencies Status](https://david-dm.org/shinnn/indexes-of-sequence/status.svg)](https://david-dm.org/shinnn/indexes-of-sequence)
[![devDependencies Status](https://david-dm.org/shinnn/indexes-of-sequence/dev-status.svg)](https://david-dm.org/shinnn/indexes-of-sequence?type=dev)

Find all indexes at which a given sequence of elements can be found in the array

```javascript
import indexesOfSequence from 'indexes-of-sequence';

indexOfSequence(['a', 'b', 'a', 'b', 'c', 'd', 'a', 'b', 'c'], ['a', 'b', 'c']); //=> [2, 6]
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install indexes-of-sequence
```

### [bower](https://bower.io/)

```
bower install indexes-of-sequence
```

## API

### indexesOfSequence(*array*, *searchArray* [, *fromIndex*])

*array*: `Array`  
*searchArray*: `Array` (the sequence of values to search for)  
*fromIndex*: `Number` (index in the array where to begin searching)  
Return: `Array` of `Number` (indexes of the sequence of values)

```javascript
indexOfSequence([1, '1', true, '1', 1, Buffer.from('1'), '1', 1, '1'], [1, '1']); //=> [0, 7]
indexOfSequence([1, '1', true, '1', 1, Buffer.from('1'), '1', 1, '1'], [1, '1'], 1); //=> [7]

indexOfSequence(['a'], ['b']); //=> []
indexOfSequence(['a'], []); //=> []
indexOfSequence([], ['b']); //=> []
```

## Related project

[index-of-sequence](https://github.com/shinnn/index-of-sequence) - Find the first index instead

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
