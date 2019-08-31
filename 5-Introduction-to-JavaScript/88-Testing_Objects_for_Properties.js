//learned how to check objects to see if propeties exist using .hasOwnProperty(propname) method

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  //wrote an if statement to see if a property is found or not and set to retrun different statements depending on results
  if (myObj.hasOwnProperty(checkProp) === true) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }

  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");
