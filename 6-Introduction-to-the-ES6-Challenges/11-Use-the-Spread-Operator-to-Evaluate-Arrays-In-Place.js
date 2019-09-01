//learned about spread operators

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  //copied contents of arr1 into arr2 via spread operator
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
