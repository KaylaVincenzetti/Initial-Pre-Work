//working more with equality vs srtict equality

// Setup
function compareEquality(a, b) {
  //changed this line to strict equality comparision
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
