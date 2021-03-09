# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by @ruowent as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ruowent/lotide`

**Require it:**

`const _ = require('@ruowent/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: It takes an array as input and returns the value of the first item (position 0) of the array
* `tail(array)`: It takes an array as input and returns the value of the last item of the array
* `middle(array)`: It takes an array as input and returns the value of the middle position of the array
* `eqArrays(arr1, arr2)`: It compares two arrays then return true or false
* `eqObjects(obj1, obj2)`: It compares two objects then return true or false
* `countOnly(obj, objItemToCount)`: It takes in a collection of items and returns counts for a specific subset of those items
* `countLetters(string)`: It takes in a string of words then return an object with number count for each letter
* `findKey(obj, callback)`: It takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(obj, value)`: It takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(arrays)`: It takes in a nested arrays and flatten it into one single array.
* `letterPositions(string)`: It takes in a sentense and return an object with the index of each letter positions
* `map(array, callback)`: It takes in an array and a callback function where it modifies the input array and returns a new array
* `takeUntil(array, callback)`: It takes in an array and a callback function where it sets a condition and return a modified array
* `without(array, itemToRemove)`: It takes in an array and another array of items to be removed from the original array. Returns a new array.