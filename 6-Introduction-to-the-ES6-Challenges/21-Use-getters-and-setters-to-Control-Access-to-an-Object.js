//learned to use getters and setter to contol access to an object

function makeClass() {
  "use strict";
  /* Alter code below this line */
  //created Thermostat class with constructor that accepts farenheit temp
  class Thermostat {
      constructor(farenheit){
      this.farenheit = farenheit;
    }
    //getter
     get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    //setter
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
