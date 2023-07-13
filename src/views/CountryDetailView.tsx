import ErrorMessage from '@/components/ErrorMessage';
import LoadingMessage from '@/components/LoadingMessage';
import { Button } from '@/components/UI/Buttons';
import { ArrowLeftIcon } from '@/components/UI/Icons';
import { LargeHeading, DetailsList } from '@/components/UI/Texts';
import { CountryCodes } from '@/constants/constants';
import useCountry from '@/hooks/useCountry';
import { Country } from '@/types/countries';
import {
  formatNativeNames,
  formatNumberToString,
  formatListToString,
  formatCurrencies,
  formatLanguages,
} from '@/utils/format';

export default function CountryDetailView({
  countryCode,
  setCountry,
}: {
  countryCode: string;
  setCountry: (arg0: string) => void;
}) {
  const { countriesList, loading, error } = useCountry(countryCode);
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
        <LoadingMessage />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <CountryDetail country={country} setCountry={setCountry} />
      )}
    </>
  );
}

function CountryDetail({
  country,
  setCountry,
}: {
  country: Country;
  setCountry: (arg0: string) => void;
}) {
  return (
    <article className="grid lg:grid-cols-2 lg:gap-30 gap-10 items-center justify-center">
      <img
        className="rounded-md"
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
      />
      <div className="space-y-8">
        <LargeHeading>{country.name.common}</LargeHeading>
        <div className="grid lg:grid-cols-2 gap-y-8">
          <DetailsList
            details={[
              {
                title: 'Native Name',
                body: formatNativeNames(country.name.nativeName),
              },
              {
                title: 'Population',
                body: formatNumberToString(country.population),
              },
              { title: 'Region', body: country.region },
              { title: 'Sub Region', body: country.subregion || 'None' },
              { title: 'Capital', body: formatListToString(country.capital) },
            ]}
          />
          <DetailsList
            details={[
              {
                title: 'Top Level Domain',
                body: formatListToString(country.tld),
              },
              {
                title: 'Currencies',
                body: formatCurrencies(country.currencies),
              },
              {
                title: 'Languages',
                body: formatLanguages(country.languages),
              },
            ]}
          />
        </div>
        <div className="flex flex-wrap gap-x-2.5 gap-y-2.5">
          <p className="font-semibold text-base mb-4 lg:mb-0 w-full lg:w-auto leading-9">
            Border Countries:{' '}
            {!country.borders && <span className="font-light">None</span>}
          </p>
          {country.borders &&
            country.borders.map((border) => (
              <Button
                aria-label={`Go to ${country.name} details page`}
                key={border}
                onClick={() => setCountry(border)}
              >
                {CountryCodes[border] || border}
              </Button>
            ))}
        </div>
      </div>
    </article>
  );
}
