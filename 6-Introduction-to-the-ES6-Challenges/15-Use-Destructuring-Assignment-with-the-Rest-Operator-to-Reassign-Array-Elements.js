//learned to use destructuring assignment to pass an object as a functions parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  //used decstructuring assignment to pass two of stats attributes (max, min)
  return function half({max, min}) {
    // use function argument destructuring
    //changed stats.max to max and stats.min to min
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
