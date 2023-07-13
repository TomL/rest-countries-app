import { Button } from '@/components/UI/button';
import { ArrowLeftIcon } from '@/components/UI/icons';
import CountryDetail from '@/components/countryDetail';
import useCountry from '@/hooks/useCountry';
import ErrorView from '@/views/Error';
import LoadingView from '@/views/Loading';

export default function CountryDetailView({
  countryCode,
  setCountry,
}: {
  countryCode: string;
  setCountry: (arg0: string) => void;
}) {
  const { countriesList, loading, error } = useCountry(countryCode);

  if (!loading) {
    if (error) return <ErrorView error={error} />;
    if (countriesList.length < 1)
      return <ErrorView error="Country not found" />;
  }
  const country = countriesList[0];
  return (
    <>
      <nav className="mt-10 mb-16 lg:mt-20 lg:mb-20">
        <Button
          aria-label="Go back to previous page"
          onClick={() => setCountry('')}
        >
          <ArrowLeftIcon className="h-4.5 w-4.5 lg:h-5 lg:w-5 mr-2 lg:mr-2.5" />
          Back
        </Button>
      </nav>
      {loading ? (
        <LoadingView />
      ) : (
        <CountryDetail country={country} setCountry={setCountry} />
      )}
    </>
  );
}
