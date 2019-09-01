//learned about the difference between var and let keywords and how let can only be used once with a variable name
//replaced var with let
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
