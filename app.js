"use strict";

function sort(...arr) {
  let array = [...arr];
  let totalArray = [];
  for (const x of array) {
    totalArray.push(...x);
  }
  return totalArray.sort((a, b) => b - a);
}

console.log(sort([10, 20, 30, 40, 50], [15, 25, 35, 45, 55], [2, 80, 1, 95]));
