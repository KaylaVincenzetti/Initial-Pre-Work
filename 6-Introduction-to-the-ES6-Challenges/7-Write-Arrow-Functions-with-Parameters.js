//learned we can pass arguments into inline functions as we would with normal functions
//rewrote function so it's an inline function
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
