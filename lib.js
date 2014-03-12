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

function sumRanges(previous, current) {
  return [current[0] + previous[0], current[1] + previous[1]];
}