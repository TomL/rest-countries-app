import { API_URL } from '@/constants/constants';
import { Country } from '@/types/types';
import { useState, useEffect } from 'react';

export default function useFetch(searchParams?: string) {
  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // reset loading on params change
    setLoading(true);
    const url = `${API_URL}?${searchParams}`;

    (async () => {
      try {
        const res = await fetch(url);

        if (res.ok) {
          const countriesList = await res.json();
          setCountriesList(countriesList);
          setLoading(false);
        } else {
          throw new Error(res.statusText);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setLoading(false);
        }
      }
    })();
  }, [searchParams]);

  return { countriesList, loading, error };
}
