function diceRange(dice) {
  var d = dice.split('d');
  return [+d[0], d[1]*d[0]];
}

function dicesRanges(dices) {
  return dices.split("+").map(diceRange);
}

function dicesRange(dices) {
  return dicesRanges(dices).reduce(sumRanges);
}

function sumRanges(x, y) {
  return [
    y[0] + x[0],
    y[1] + x[1]
  ];
}
