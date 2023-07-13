import { CardWithImage } from '@/components/UI/card';
import { formatNumberToString } from '@/utils/format';
import { Country } from '@/types/types';

export default function CountryList({
  countryList,
  setCountry,
}: {
  countryList: Country[];
  setCountry: (country: string) => void;
}) {
  return (
    <div className="grid grid-cols-countries  items-stretch justify-around lg:justify-between gap-x-8 lg:gap-y-16 gap-y-10">
      {countryList.map((country) => (
        <button
          aria-label={`Go to ${country.name} details page`}
          key={country.name}
          type="button"
          onClick={() => setCountry(country.alpha3Code)}
        >
          <CardWithImage
            image={country.flags.png}
            name={country.name}
            details={[
              {
                title: 'Population',
                body: formatNumberToString(country.population),
              },
              { title: 'Region', body: country.region },
              { title: 'Capital', body: country.capital || 'None' },
            ]}
          />
        </button>
      ))}
    </div>
  );
}
