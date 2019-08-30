//learned .unshift() works like .push() but adds items to beginning not end of array

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
//added Paul and 35 to beginning of myArray
myArray.unshift(["Paul", 35]);
