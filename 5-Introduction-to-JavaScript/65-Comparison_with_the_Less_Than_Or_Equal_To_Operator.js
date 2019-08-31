//learned about less than, equal two, just like less than but also checks to see if equal to a value

function testLessOrEqual(val) {
//set to check if value is less then or equal to 12
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  ////set to check if value is less then or equal to 24
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);
