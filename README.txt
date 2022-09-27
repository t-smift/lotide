# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @t.smith/lotide`

**Require it:**

`const _ = require('@t.smith/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* tail(array): takes in an array and returns a new array with all but the first index
* head(array) : returns the first element in a given array
* middle(array) : returns the value at the middle index of an array, or an array if there are 2 middle values
* without(source, itemsToRemove) : returns a new array where with only items that are not found in itemsToRemove array
* takeUntil(array, callback) : returns a new array with each value from original up to the index where the callback funtion triggers a stop
* reverseString(str) : returns a string in reverse order
* reverse(array) : takes in a array and applies reverseString to each element, console logs each element reversed
* findKey(object, callback) : takes in a object and returns the key that triggers the callback function
* findKeyByValue(object, value) : similar to above, returns the key whose value matches input value
* assertEqual(actual, expected) : function for testing outputs, logs true if actual === expected
* eqArrays(arr1, arr2) : returns true if both arrays are exactly the same
* assertArraysEqual(actual, expected) : assert function that leverages eqArrays logs a test message based on eqArrays passing or failing
* eqObjects(obj1, obj2) : returns true if both objects have the exact same keys and values
* assertObjectsEqual(actual, expected) : assertion test function that logs a pass or fail message leveraging eqObjects
* more to come
