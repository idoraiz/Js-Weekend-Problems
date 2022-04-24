require('./strStr.easy');

test('Checks if needle.length >= 1', () => {
  expect(strStr('haystack','')).toBe(false);
});

test('Checks if needle is in haystack', () => {
  expect(strStr('haystack','needle')).toBe(true);
});

test('Return first occurance of needle in haystack', () => {
  expect(strStr('qwsdrfsda','sda')).toBe(6);
});

test('Return first occurance of needle in haystack', () => {
  expect(strStr('hello','ll')).toBe(2);
});

test('Return first occurance of needle in haystack', () => {
  expect(strStr('aaaaa','bba')).toBe(-1);
});