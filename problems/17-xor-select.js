/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function (array, cb1, cb2) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let val = array[i];
    let call1 = cb1(val);
    let call2 = cb2(val);
    if (call1 === true && call2 !== true) result.push(val);
    if (call1 !== true && call2 === true) result.push(val);
  }
  return result;
};

// let isEven = function(n) {
//   return n % 2 === 0;
// };

// let isPositive = function(n) {
//   return n > 0;
// };

// console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// // [ -2, 1, 3 ]

let longString = function (s) {
  return s.length > 4;
};

let startsA = function (s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = xorSelect;
} catch (e) {
  return null;
}
