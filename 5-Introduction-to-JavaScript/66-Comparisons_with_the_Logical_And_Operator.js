//learnd about the logical And operator which only returns true if operands to left and right are both true

function testLogicalAnd(val) {
  // Only change code below this line
//changed code to return true if val is less than or equal to 50 and greater than or equal to 25
  if (val <= 50 && val >= 25) {
      return "Yes";

  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
