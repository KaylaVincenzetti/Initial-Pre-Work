//learned about how else statements tell the computer to run an alternate block of code when a condition is false

function testElse(val) {
  var result = "";
  // Only change code below this line
//changed the code to use an if/else statement instead of multiple if statements  
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
