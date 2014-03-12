
describe('range generation', function () {

  it('gives the range within min and max values', function () {
    expect(dicesRange('1d6')).toEqual([1,6]);
  });

  it('gives the range within min and max for 1d10', function () {
    expect(dicesRange('1d10')).toEqual([1,10]);
  });


});

