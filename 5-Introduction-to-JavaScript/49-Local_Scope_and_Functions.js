//learned how variables and function parameters declared within functions have local scope and are only visiable within that functions

function myLocalScope() {
  //declared and initialized myVar
  var myVar = "Hello";
  'use strict'; // you shouldn't need to edit this line

  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
//removed the console.log to stop receiving myVar is undefined message since it was calling on myVar outside of the function
