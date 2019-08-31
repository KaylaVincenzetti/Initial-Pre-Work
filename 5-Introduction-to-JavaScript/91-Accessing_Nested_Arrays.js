//learned how to use array bracket notation to access nested arrays within objects

// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line
//retrieved the second tree from the myPlants object
var secondTree = myPlants[1].list[1]; // Change this line
