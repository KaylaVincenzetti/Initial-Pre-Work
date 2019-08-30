//learned it's important to always declare variables with var keyword, otherwise they will be created in global scope and can be seen everywhere

// Declare your variable here
//declared myGlobal and initialized value to 10
var myGlobal = 10;


function fun1() {
  // Assign 5 to oopsGlobal Here
  //decalred variable oopsGlobal without var keyword inside function fun and initialized value to 5
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
