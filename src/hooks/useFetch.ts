import { API_URL } from '@/constants/constants';
import { Country } from '@/types/countries';
import { useState, useEffect } from 'react';

export default function useFetch(searchParams?: string) {
  const [countryList, setcountryList] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // reset on params change
    setLoading(true);
    setError('');

    (async () => {
      try {
        const url = `${API_URL}${searchParams}`;
        const res = await fetch(url);

        if (res.ok) {
          const data = await res.json();
          // If data is not an array, make it one to ensure consistent data structure
          setcountryList(Array.isArray(data) ? data : [data]);
        } else {
          if (res.status === 404) {
            setcountryList([]);
          } else {
            throw new Error(res.statusText);
          }
        }
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchParams]);

  return { countryList, loading, error, setcountryList };
}
