import useFetch from '@/hooks/useFetch';
import { Region } from '@/types/types';

export default function useCountries(search?: string, region?: Region) {
  const query = new URLSearchParams();
  if (search) query.append('q', search);
  if (region) query.append('region', region);
  return useFetch(query.toString());
}
