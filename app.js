"use strict";

let map = new Map();
map.set("name", "John");

let keys = map.keys();
console.log(typeof keys);
console.log(keys);

// this error is because we cant use array methods on Map
// We can use Array.from to first convert Map into an array then use array methods
