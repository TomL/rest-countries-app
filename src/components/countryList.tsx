import { CardWithImage } from '@/components/UI/card';
import { formatListToString, formatNumberToString } from '@/utils/format';
import { Country } from '@/types/countries';

export default function CountryList({
  countryList,
  setCountry,
}: {
  countryList: Country[];
  setCountry: (country: string) => void;
}) {
  return (
    <div className="grid grid-cols-countries  items-stretch justify-around lg:justify-between gap-x-8 lg:gap-y-16 gap-y-10">
      {countryList.map((country) => {
        return (
          <button
            aria-label={`Go to ${country.name} details page`}
            key={country.cca3}
            type="button"
            onClick={() => setCountry(country.cca3)}
          >
            <CardWithImage
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
          </button>
        );
      })}
    </div>
  );
}
