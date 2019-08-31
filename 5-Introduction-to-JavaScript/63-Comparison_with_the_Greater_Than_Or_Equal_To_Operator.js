//learned about the greater than equal operator, it does type corecion

function testGreaterOrEqual(val) {
  //set to compare val as greater than or equal to 20
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  //set to compare val as greater than or equal to 10
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
