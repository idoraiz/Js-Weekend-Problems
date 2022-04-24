require('./romanToInteger.easy');

test('conversion of roman digits to integers', () => {
  expect(romanToInteger('III')).toBe(3);
});

test('conversion of roman digits to integers', () => {
  expect(romanToInteger('LVIII')).toBe(58);
});

test('conversion of roman digits to integers', () => {
  expect(romanToInteger('MCMXCIV')).toBe(1994);
});