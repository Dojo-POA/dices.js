function parseDecimals(elem) {
  return parseInt(elem, 10);
}

function generate(dice) {
  return dice.split('d').map(parseDecimals);
}