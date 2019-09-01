//learned to easily define object literals

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  //removed duplicate words and colons
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
