"use strict";

function arrayEdit(arr) {
  let newArr = new Set(arr);
  return [...newArr];
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(arrayEdit(values));
