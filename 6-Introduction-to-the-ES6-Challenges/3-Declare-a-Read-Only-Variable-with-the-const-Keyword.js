//learned about the difference between let and const keywords and how const variable names are commonly all uppercase with words seperated with an underscore

function printManyTimes(str) {
  "use strict";

  // change code below this line
//changed to cosnt with uppercase variable name because this variable will remain the same
  const SENTENCE = str + " is cool!";
  //changed to let because this variable will change
  for(let i = 0; i < str.length; i+=2) {
    //changed casing of variable name to uppercase to match new variable name
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
