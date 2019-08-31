//learned how to loop through an array and a sub-array

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
//created a for loop to loop through frst array
  for(var i=0; i < arr.length; i++){
    //nested a second for loop to loop through sub-array
    for (var j=0; j < arr[i].length; j++){
      //set product to equal product times value of array[i][j]
      product = product * arr[i][j];
    }

  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
