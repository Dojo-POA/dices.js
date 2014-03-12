function generate(dice) {
  return dice.split('d').map(function(elem) {
    return parseInt(elem, 10);
  });
};