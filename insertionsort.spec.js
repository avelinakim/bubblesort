
describe('Insert function', function () {
  it('can insert', function () {
    // test the merging algorithm
    expect(insertionSort([2, 3, 1, -100, 7, 9, 4])).toBe([1, 2, 3])
  });
});
