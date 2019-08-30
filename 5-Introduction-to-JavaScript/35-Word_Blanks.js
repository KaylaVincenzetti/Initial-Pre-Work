//challenged to build a complete sentence using concatenation

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  //added my own words plus concatenated with choices from wordBlanks to form complete sentence
    result = "I have a "+myAdjective+" "+myNoun+" He "+myVerb+" "+myAdverb+".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("cat", "black", "sits", "quietly");
