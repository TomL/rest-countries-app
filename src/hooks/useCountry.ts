import useFetch from '@/hooks/useFetch';

export default function useCountry(countryCode: string) {
  const query = new URLSearchParams();
  query.append('alpha3Code', countryCode);
  return useFetch(query.toString());
}
