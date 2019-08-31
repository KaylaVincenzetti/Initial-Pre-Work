//learned about the return early pattern for functions, this reduces the number of else statements within a function to 0 by using logical operators like the Or

// Setup
function abTest(a, b) {
  // Only change code below this line
//set up an if statment to check to see if a or b are less than 0 and to return undefined if so
  if (a < 0 || b < 0) {
    return undefined;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
