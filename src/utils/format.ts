import { Country, Name } from '@/types/countries';

/**
 * Formats a number to a string using the 'en-US' locale. (commas seperating
 * the thousands)
 *
 * @param num - The number to be formatted
 * @returns The formatted number as a string
 */
export const formatNumberToString = (num: number) => {
  return num.toLocaleString('en-US');
};

/**
 * Converts an array of strings into a comma-separated string.
 * If the array is empty or undefined, returns the string 'None'.
 *
 * @param list - An array of strings to be formatted
 * @returns A comma-separated string of the array elements or 'None' if the array is empty
 */
export const formatListToString = (list: string[] | undefined) => {
  if (!list || list.length === 0) return 'None';
  return list.join(', ');
};

/**
 * Converts an array of strings into a comma-separated string, removing any duplicate elements.
 * If the array is empty, returns the string 'None'.
 * This function is particularly useful for formatting lists of currencies or languages, where duplicates may occur.
 *
 * @param list - An array of strings to be formatted
 * @returns A comma-separated string of the unique array elements or 'None' if the array is empty
 */
export const formatStringListToUniqueString = (list: string[]) => {
  return formatListToString([...new Set(list)]);
};

/**
 * Formats the native names of a country into a comma-separated string, removing any duplicates.
 *
 * @param nativeNames - An object containing the native names of a country
 * @returns A comma-separated string of the unique native names
 */
export function formatNativeNames(nativeNames: Name['nativeName']) {
  const nativeNameStringList = Object.values(nativeNames).map(
    ({ common }) => common,
  );
  return formatStringListToUniqueString(nativeNameStringList);
}

/**
 * Formats the currencies of a country into a comma-separated string.
 *
 * @param currencies - An object containing the currencies of a country
 * @returns A comma-separated string of the currency names
 */
export const formatCurrencies = (
  currencies: Country['currencies'] | undefined,
) => {
  const currencyStringList = Object.values(currencies || {}).map(
    ({ name }) => name,
  );
  return formatListToString(currencyStringList);
};

/**
 * Formats the languages of a country into a comma-separated string.
 * If the languages object is empty or undefined, returns the string 'None'.
 *
 * @param languages - An object containing the languages of a country
 * @returns A comma-separated string of the languages or 'None' if the languages object is empty
 */
export function formatLanguages(languages: Country['languages'] | undefined) {
  return formatListToString(Object.values(languages || {}));
}
