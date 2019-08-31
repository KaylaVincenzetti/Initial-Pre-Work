//learned that when a function doesn't have a return statement, the retruned value will be undefined but the function will process it's inner code

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
//created addFive function with no return statement
function addFive() {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
