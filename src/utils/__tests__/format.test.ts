import {
  formatCurrencies,
  formatLanguages,
  formatListToString,
  formatNativeNames,
  formatNumberToString,
  formatStringListToUniqueString,
} from '../format';

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
    expect(formatListToString(['English', 'Spanish', 'German'])).toBe(
      'English, Spanish, German',
    );
  });

  it('returns "None" for an undefined list', () => {
    expect(formatListToString(undefined)).toBe('None');
  });

  it('returns "None" for an empty list', () => {
    expect(formatListToString([])).toBe('None');
  });
});

describe('formatStringListToUniqueString', () => {
  it('formats a list of strings removing non-unique elements, returned as a string', () => {
    const stringList = ['English', 'Spanish', 'German', 'English'];
    expect(formatStringListToUniqueString(stringList)).toBe(
      'English, Spanish, German',
    );
  });

  it('formats a list of strings for a list of length 1, returned as a string', () => {
    expect(formatStringListToUniqueString(['English'])).toBe('English');
  });

  it('returns "None" for an empty list', () => {
    expect(formatStringListToUniqueString([])).toBe('None');
  });
});

describe('formatNativeNames', () => {
  it('formats a list of native names with duplicates removed', () => {
    const nativeName = {
      cal: {
        official: 'Commonwealth of the Northern Mariana Islands',
        common: 'Northern Mariana Islands',
      },
      cha: {
        official: 'Sankattan Siha Na Islas Mariånas',
        common: 'Na Islas Mariånas',
      },
      eng: {
        official: 'Commonwealth of the Northern Mariana Islands',
        common: 'Northern Mariana Islands',
      },
    };
    expect(formatNativeNames(nativeName)).toBe(
      'Northern Mariana Islands, Na Islas Mariånas',
    );
  });
});

describe('formatCurrencies', () => {
  it('formats a list of length 1 currencies to a string', () => {
    const currencies = {
      USD: {
        name: 'United States Dollar',
        symbol: '$',
      },
    };
    expect(formatCurrencies(currencies)).toBe('United States Dollar');
  });

  it('formats a list of currencies to a string', () => {
    const currencies = {
      DZD: { name: 'Algerian dinar', symbol: 'دج' },
      MAD: { name: 'Moroccan dirham', symbol: 'DH' },
      MRU: { name: 'Mauritanian ouguiya', symbol: 'UM' },
    };
    expect(formatCurrencies(currencies)).toBe(
      'Algerian dinar, Moroccan dirham, Mauritanian ouguiya',
    );
  });

  it('returns "None" for an undefined list', () => {
    expect(formatCurrencies(undefined)).toBe('None');
  });
});

describe('formatLanguages', () => {
  it('formats a list of languages to a string', () => {
    const languages = { eng: 'English', hmo: 'Hiri Motu', tpi: 'Tok Pisin' };
    expect(formatLanguages(languages)).toBe('English, Hiri Motu, Tok Pisin');
  });

  it('returns "None" for an undefined list', () => {
    expect(formatLanguages(undefined)).toBe('None');
  });
});
