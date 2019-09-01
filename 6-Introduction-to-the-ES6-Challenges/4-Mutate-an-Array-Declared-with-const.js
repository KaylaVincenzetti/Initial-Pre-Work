//learned using const instead of let with arrays could potentially cause problems

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  //used element assignment to access and change value of the array
      s[0] = 2;
      s[1] = 5;
      s[2] = 7;

  // change code above this line
}
editInPlace();
