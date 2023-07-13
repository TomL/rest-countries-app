// format a number as a string with commas seperating the thousands
export const formatNumberToString = (num: number) => {
  return num.toLocaleString('en-US');
};

// format a list of strings as a single string with commas seperating the items
// or the string 'None' if the list is empty
export const formatListToString = (list: string[] | undefined) => {
  if (!list || list.length === 0) return 'None';
  return list.join(', ');
};
