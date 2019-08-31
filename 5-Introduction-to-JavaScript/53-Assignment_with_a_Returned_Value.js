//learned how to take the return value of a function and assign it to a variable

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
//called processArg with an argument of 7 and assigned the value to the processed variable
processed = processArg(7);
