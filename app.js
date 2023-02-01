"use strict";

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let x = Object.entries(salaries);

let names = [];
let salaryArr = [];

for (const [name, salary] of x) {
  names.push(name);
  salaryArr.push(salary);
}

console.log(names);