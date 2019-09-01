//learned about the differences between scope on var and let keywords

function checkScope() {
"use strict";
//changed var to let
  let i = "function scope";
  if (true) {
    //added let to code, previously was just i with no variable keyword
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
