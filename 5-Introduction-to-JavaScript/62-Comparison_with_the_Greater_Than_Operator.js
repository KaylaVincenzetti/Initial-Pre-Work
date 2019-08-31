//learned about the greater than operator and how it will return true if value to left is greater than value to right

function testGreaterThan(val) {
  //set to return true if val is over 100
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    //set to return true if val is over 10
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
