import { freqSort } from './freqSort';

describe('Template Test', () => {
  test('Should return an array sorted by frequency', () => {
    expect(freqSort(['a', 'z', 'z', 'z', 'b', 'b', 'z'])).toStrictEqual(['z', 'b', 'a']);
  });
  test('Should return an array sorted by frequency', () => {
    expect(freqSort(['a', 'b', 'b', 'c', 'c', 'd', 'c'])).toStrictEqual(['c', 'b', 'a', 'd']);
  });
});
