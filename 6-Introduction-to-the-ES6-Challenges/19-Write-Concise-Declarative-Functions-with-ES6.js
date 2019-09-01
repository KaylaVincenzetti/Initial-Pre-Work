//learned to write concise declarative functions with ES6 by removeing fucntion keyworkd and colon

// change code below this line
const bicycle = {
  gear: 2,
  //removed function keyword and colon
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
