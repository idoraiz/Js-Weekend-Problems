require('./twoSum.easy');

test('finding sum of two numbers equal to targer value', () => {
  expect(twoSum([2,7,11,15],9)).toBe([0,1]);
});

test('finding sum of two numbers equal to targer value', () => {
  expect(twoSum([3,2,4],6)).toBe([0,1]);
});

test('finding sum of two numbers equal to targer value', () => {
  expect(twoSum([3,3],6)).toBe([0,1]);
});