
describe('range generation', function () {

  beforeEach(function () {

  });

  it('gives the range within min and max values', function () {
    expect(generate('1d6')).toEqual([1,6]);
  });
});

