//learned that ES6 gives us a new syntax to help create objects using the keyword class

function makeClass() {
  "use strict";
  /* Alter code below this line */
  //created Vegetable class
  class Vegetable {
    constructor(name) {
      this.name = name;
    }

  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
