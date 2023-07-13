import { FIELDS_DETAILS } from '@/constants/constants';
import useFetch from '@/hooks/useFetch';

export default function useCountry(countryCode: string) {
  const query = `alpha/${countryCode}?fields=${FIELDS_DETAILS}`;
  return useFetch(query);
}
