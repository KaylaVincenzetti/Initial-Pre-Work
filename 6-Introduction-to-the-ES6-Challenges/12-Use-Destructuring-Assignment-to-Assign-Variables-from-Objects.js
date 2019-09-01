//learned about destructuring assignment which is special syntax that assigns values taken from an object to variables

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  //used destructuring to get the average temp for tomorrow and assigned to tempOfTomorrow
  const { tomorrow: tempOfTomorrow } = avgTemperatures // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
