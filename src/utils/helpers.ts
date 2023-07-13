// range function, accepts number n, returns a list of strings in the range [1, n]
export const range = (n: number) => {
  if (n <= 1 || Number.isNaN(n)) return ['1'];
  return [...Array(n).keys()].map((i) => (i + 1).toString());
};
