import { formatListToString, formatNumberToString } from '../format';

describe('formatNumberToString', () => {
  it('formats a three-digit number correctly', () => {
    expect(formatNumberToString(491)).toBe('491');
  });

  it('formats a five-digit number correctly', () => {
    expect(formatNumberToString(94321)).toBe('94,321');
  });

  it('formats an eleven-digit number correctly', () => {
    expect(formatNumberToString(1345678901)).toBe('1,345,678,901');
  });
});

describe('formatListToString', () => {
  it('formats a list of strings with commas', () => {
    expect(formatListToString(['apple', 'banana', 'cherry'])).toBe(
      'apple, banana, cherry',
    );
  });

  it('returns "None" for an undefined list', () => {
    expect(formatListToString(undefined)).toBe('None');
  });

  it('returns "None" for an empty list', () => {
    expect(formatListToString([])).toBe('None');
  });
});
