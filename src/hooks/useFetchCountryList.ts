import { FIELDS } from '@/constants/constants';
import useFetch from '@/hooks/useFetch';
import { Region } from '@/types/countries';
import { useMemo } from 'react';

export default function useFetchCountryList(search?: string, region?: Region) {
  const query = (search ? `name/${search}` : 'all') + `?fields=${FIELDS}`;
  console.log('query', query);
  const { countryList, loading, error } = useFetch(query);

  // filter by region manually, as the api doesn't support chaining parameters
  const filteredCountries = useMemo(() => {
    if (region) {
      return countryList.filter((country) => country.region === region);
    }
    return countryList;
  }, [countryList, region]);

  return { countryList: filteredCountries, loading, error };
}
