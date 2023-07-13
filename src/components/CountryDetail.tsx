import { Button } from '@/components/UI/Buttons';
import { LargeHeading, DetailsList } from '@/components/UI/Texts';
import { CountryCodes } from '@/constants/constants';
import { Country } from '@/types/countries';
import {
  formatNativeNames,
  formatNumberToString,
  formatListToString,
  formatCurrencies,
  formatLanguages,
} from '@/utils/format';

export default function CountryDetail({
  country,
  handleSelectedCountryChange,
}: {
  country: Country;
  handleSelectedCountryChange: (arg0: string) => void;
}) {
  console.log(country.borders);
  return (
    <article className="grid lg:grid-cols-2 lg:gap-30 gap-10 items-center justify-center">
      <div>
        <img
          className="rounded-md"
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
        />
      </div>
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
            {country.borders && country.borders.length === 0 && (
              <span className="font-light">None</span>
            )}
          </p>
          {country.borders &&
            country.borders.map((border) => (
              <Button
                aria-label={`Go to ${country.name} details page`}
                key={border}
                onClick={() => handleSelectedCountryChange(border)}
              >
                {CountryCodes[border] || border}
              </Button>
            ))}
        </div>
      </div>
    </article>
  );
}
