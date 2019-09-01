//learned about default parameters for functions

const increment = (function() {
  "use strict";
  //added = 1 to value so it would add 1 to number even when value is not specified
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
