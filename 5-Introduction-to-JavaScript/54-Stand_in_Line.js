//wrote function that added and removed items to end of and from front of array

function nextInLine(arr, item) {
  // Your code here
  //pushes itme to end of array
  arr.push(item);
  //removes item from beginning of arry
  var removed = arr.shift();
  //returns itme that was removed from beginning of array
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
