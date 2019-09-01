//learned about the rest operator for function parameters

const sum = (function() {
  "use strict";
  //replaced parameters with ...args
  return function sum(...args) {
    //removed uneeeded code
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
