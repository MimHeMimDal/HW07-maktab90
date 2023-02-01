"use strict";

function wordSorter(word) {
  return word.toLowerCase().split("").sort().join("");
}

function clean(arr) {
  let temp = new Map();

  for (let i = 0; i < arr.length; i++) {
    temp.set(wordSorter(arr[i]), arr[i]);
  }

  return Array.from(temp.values());
}

let arr = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
  "Anp",
  "Rea",
];

console.log(clean(arr));
