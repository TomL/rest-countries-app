import { range } from '../helpers';

describe('range', () => {
  it('returns ["1"] for n <= 1', () => {
    expect(range(0)).toEqual(['1']);
    expect(range(1)).toEqual(['1']);
  });

  it('returns ["1"] for NaN', () => {
    expect(range(NaN)).toEqual(['1']);
  });

  it('returns a list of strings in the range [1, n] for n > 1', () => {
    expect(range(5)).toEqual(['1', '2', '3', '4', '5']);
  });
});
