//learned about the lees than operator, it compares values and does type coercion. If the value on the left is less than that of the one on the right it returns false

function testLessThan(val) {
  //set to compare val to see if it is less than 25
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  //set to compare val to see if it is less than 55
  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
