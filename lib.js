function generate(dice) {
  var parts = dice.split('d');
  return [parseInt(parts[0]), parseInt(parts[1])];
};