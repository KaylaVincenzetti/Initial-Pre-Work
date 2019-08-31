//learned how if statements can be chained together by using else if statements when multiple conditions must be statements

//converted logic to use else if statements instead of multiple if statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }

}

// Change this value to test
testElseIf(7);
