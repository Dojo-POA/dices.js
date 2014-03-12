function parseDecimals(elem) {
  return parseInt(elem, 10);
}

function diceRange(dice) {
  return dice
          .split('d')
          .map(parseDecimals);
}

function dicesRanges(dices) {
  return dices.split("+").map(function(elem) {
    return diceRange(elem);
  });
}

function dicesRange(dices) {
  return diceRange(dices);
}

