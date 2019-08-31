//learned about the strict equality operator and how it compares both type and value, both must be the same to be equality

// Setup
function testStrict(val) {
  //changed line to check to see if val is equal to both the type and value of 7
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
