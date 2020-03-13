import { parseMs } from './parseMs';

describe('parseMs', () => {
  test('is parsing milliseconds to object', () => {
    expect(parseMs(1337000001)).toStrictEqual({
      days: 15,
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 1,
      microseconds: 0,
      nanoseconds: 0,
    });
  });
  test('is parsing milliseconds to object with  only day value', () => {
    expect(parseMs(1.728e+9)).toStrictEqual({
      days: 20,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0,
    });
  });
  test('is parsing milliseconds to object with only hour', () => {
    expect(parseMs(7.2e+7)).toStrictEqual({
      days: 0,
      hours: 20,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0,
    });
  });
  test('is parsing milliseconds to object with only minutes', () => {
    expect(parseMs(1.2e+6)).toStrictEqual({
      days: 0,
      hours: 0,
      minutes: 20,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0,
    });
  });
});
