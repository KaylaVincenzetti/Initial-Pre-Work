//learned ojects can be used instead of switch statments to lookup tabular data values

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  //changed switch statement to object called lookup and set result to equal the value of the objects property
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
