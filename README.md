# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install yahyalighthouselotide/lotide`

**Require it:**

`const _ = require('yahyalighthouselotide/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual()`: checks if two arrays have equal elements in the same indices.
* `assertEqual()`: checks for strict equality between two values.
* `assertObjectsEqual()`: checks if two objects has the same key:value pairs then returns a fancy message.
* `countLetters()`: counts letters in a string then stores it in object
* `countOnly()`: counts items in an object then returns the amount in another object
* `countLetters()`: counts letters in a string then stores it in object
* `eqArrays()`: does the same as assertArraysEqual but doesnt return a fancy assertion message, only T or F.
* `eqObjects()`: does the same as asserObjectsEqual but doesnt return a fancy assertion message, only T or F.
* `findByKeyValue()`: returns a value from an object that matches a the specified key.
* `findKey()`: finds a key that is returned by the callback function.
* `head()`: returns the first element or first letter of array/string.
* `letterPositions()`: return an object of all indices that are re-occuring values.
* `map()`: does something with a callback function.
* `middle()`: returns the middle elements of an array.
* `tail()`: returns all the elements of an array except the head.
* `takeUntil()`: adds elements to the array until callback condition terminates.
* `without`: removes certain elements of an array bassed on items to remove array.