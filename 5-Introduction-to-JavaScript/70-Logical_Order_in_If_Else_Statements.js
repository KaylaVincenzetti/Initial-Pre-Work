//learned about how order is important in if, else if statements because if the first condition is met, it may not test the next condition and may return something different than what you want

function orderMyLogic(val) {
  //corrected the code so correct statements would always be returned
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10){
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
