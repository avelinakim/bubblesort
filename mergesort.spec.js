describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    // your code here 
    expect(split([1, 2, 3]).length).toBe(2)
  });

});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm
    expect(mergeSort([2, 1, 3, 11, 0, 8, -5, 13])).toBe([1, 2, 3])
  });
});
