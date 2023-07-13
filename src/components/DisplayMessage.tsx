import ErrorMessage from '@/components/ErrorMessage';
import InfoMessage from '@/components/InfoMessage';
import LoadingMessage from '@/components/LoadingMessage';
import { Country } from '@/types/countries';

export default function DisplayMessage({
  loading,
  error,
  countryList,
}: {
  loading: boolean;
  error: string;
  countryList: Country[];
}) {
  if (loading) return <LoadingMessage />;
  if (error) return <ErrorMessage error={error} />;
  if (countryList.length < 1) return <InfoMessage info="Country not found" />;
  return null;
}
