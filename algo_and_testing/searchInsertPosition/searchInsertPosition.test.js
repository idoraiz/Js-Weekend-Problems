require ('./searchInsertPosition.easy');

test('check a float target number', () => {
  expect(searchInsertPosition([1,3,5,6],5.5)).toBe(2);
});

test('check position of a target int inside a sorted array of ints', () => {
  expect(searchInsertPosition([1,3,5,6],5)).toBe(2);
});

test('check position of a target int inside a sorted array of ints', () => {
  expect(searchInsertPosition([1,3,5,6],2)).toBe(1);
});

test('check position of a target int inside a sorted array of ints', () => {
  expect(searchInsertPosition([1,3,5,6],7)).toBe(4);
});

test('check position of a target int inside a sorted array of ints', () => {
  expect(searchInsertPosition([1,3,5,6],0)).toBe(0);
});

