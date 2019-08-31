//wrote function for blackjack card counting function

var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;


  }
    if (count == 5) {
      return count + " Bet";
    } else if (card == 9) {
      return 0 + " Hold";
    } else if (card == "A") {
      return count + " Hold";
    } else if (card == 7) {
      return 1 + " Bet";
    } else if (card == 10) {
      return 1 + " Bet";
    } else if (card == "K") {
      return -1 + " Hold";
  }
