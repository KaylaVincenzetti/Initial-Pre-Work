//learned to access the sub properties of objects by chaining together . or [] notaion

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
//assigned the contents of glove box property within the myStoreage object to the gloveBoxContents variable
var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
