import { CardWithImage } from '@/components/UI/Cards';
import { Country } from '@/types/countries';
import { formatNumberToString, formatListToString } from '@/utils/format';

export function CountryList({
  countryList,
  handleSelectedCountryChange,
}: {
  countryList: Country[];
  handleSelectedCountryChange: (country: string) => void;
}) {
  return (
    <div className="grid grid-cols-countrylist items-stretch justify-around lg:justify-between gap-x-8 lg:gap-y-16 gap-y-10">
      {countryList.map((country) => {
        return (
          <CardWithImage
            aria-label={`Go to ${country.name.common} details page`}
            className="cursor-pointer dark:focus-visible:ring-medgrey focus-visible:ring-darkblue focus-visible:outline-none focus-visible:ring-1"
            key={country.cca3}
            onClick={() => handleSelectedCountryChange(country.cca3)}
            tabIndex={0}
            image={country.flags.png}
            name={country.name.common}
            details={[
              {
                title: 'Population',
                body: formatNumberToString(country.population),
              },
              { title: 'Region', body: country.region },
              { title: 'Capital', body: formatListToString(country.capital) },
            ]}
          />
        );
      })}
    </div>
  );
}
