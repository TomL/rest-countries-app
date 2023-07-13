import useFetch from '@/hooks/useFetch';
import { Region } from '@/types/countries';
import { useMemo } from 'react';

export default function useCountries(search?: string, region?: Region) {
  const query = search ? `name/${search}` : 'all';
  const { countriesList, loading, error } = useFetch(query);

  // filter by region manually, as the api doesn't seem to support chaining parameters
  const filteredCountries = useMemo(() => {
    if (region) {
      return countriesList.filter((country) => country.region === region);
    }
    return countriesList;
  }, [countriesList, region]);

  return { countriesList: filteredCountries, loading, error };
}
