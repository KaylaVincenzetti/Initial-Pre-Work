//wrote switch statments without breaks between several cases because the answers would be the same

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  //these switch statments have multiple inputs with the same output, a break is not needed until output will be changed
  switch(val){
    case 1:
    case 2:
    case 3:
    answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer = "High"
  }



  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
