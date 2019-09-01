//learned to use Math.floor in combination with Math.random to generate random whole numbers instead of decimals

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.
  //Math.Floor rounds the results of Math.random down to nearest whole number
  return Math.floor(Math.random() * 10);

  return randomWholeNum();
}
