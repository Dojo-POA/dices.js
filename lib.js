function parseDecimals(elem) {
  return parseInt(elem, 10);
}

function diceRange(dice) {
  return dice
          .split('d')
          .map(parseDecimals);
}

function dicesRanges(dices) {
  return dices.split("+").map(diceRange);
}

function dicesRange(dices) {
  return dicesRanges(dices).reduce(sumRanges);
}

function sumRanges(x, y) {
  return [y[0] + x[0], y[1] + x[1]];
}