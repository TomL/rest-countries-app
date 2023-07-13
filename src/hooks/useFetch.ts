import { API_URL } from '@/constants/constants';
import { Country } from '@/types/countries';
import { useState, useEffect } from 'react';

export default function useFetch(searchParams?: string) {
  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // reset loading on params change
    setLoading(true);
    const url = `${API_URL}${searchParams}`;

    (async () => {
      try {
        const res = await fetch(url);

        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setCountriesList(data);
          } else {
            setCountriesList([data]);
          }
          setLoading(false);
        } else {
          throw new Error(res.statusText);
        }
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    })();
  }, [searchParams]);

  return { countriesList, loading, error, setCountriesList };
}
