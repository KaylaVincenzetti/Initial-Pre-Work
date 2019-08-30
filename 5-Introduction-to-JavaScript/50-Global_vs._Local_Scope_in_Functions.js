//learned it's possible to have both a global and local variable with the same name and the local variable takes precedence over the global variable

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  //declared and initialized outerWear variable inside myOutfit function
  var outerWear = "sweater";



  // Only change code above this line
  return outerWear;
}

myOutfit();
