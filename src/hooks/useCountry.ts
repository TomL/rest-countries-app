import useFetch from '@/hooks/useFetch';

export default function useCountry(countryCode: string) {
  const query = `alpha/${countryCode}`;
  return useFetch(query.toString());
}
