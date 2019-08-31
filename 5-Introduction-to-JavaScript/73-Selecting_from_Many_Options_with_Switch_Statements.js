//use switch statements when you have many various possible values. statements are exuctued from first matched values and use strict equality, They run until a break is encountered

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  //created switch statements, these switch the answer based on the argument passed into caseInSwitch when called
  switch(val) {
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;

  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
