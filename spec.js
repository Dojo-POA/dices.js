
describe('range generation', function () {

  it('gives the range within min and max values', function () {
    expect(dicesRange('1d6')).toEqual([1,6]);
  });

  it('gives the range within min and max for 1d10', function () {
    expect(dicesRange('1d10')).toEqual([1,10]);
  });

  it('gives [2,12] for two dices 1d6 + 1d6', function () {
    expect(dicesRange('1d6 + 1d6')).toEqual([2,12]);
  });
});

describe('gives a array of ranges that are summing', function() {
  it("returns [[1,6]] for 1d6", function() {
    expect(dicesRanges('1d6')).toEqual([[1,6]]);
  });

  it("returns [[1,6], [1, 6]] for 1d6", function() {
    expect(dicesRanges('1d6 + 1d6')).toEqual([[1,6], [1, 6]]);
  });
})


