import { SearchBox, SelectBox } from '@/components/UI/Inputs';
import { Country, Region } from '@/types/countries';
import { CardWithImage } from '@/components/UI/Cards';
import { formatListToString, formatNumberToString } from '@/utils/format';
import LoadingMessage from '@/components/LoadingMessage';
import InfoMessage from '@/components/InfoMessage';
import ErrorMessage from '@/components/ErrorMessage';

export default function CountriesListView({
  countriesList,
  loading,
  error,
  searchQuery,
  handleSearchQueryChange,
  handleRegionChange,
  setCountry,
}: {
  countriesList: Country[];
  loading: boolean;
  error: string;
  searchQuery: string;
  handleSearchQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setCountry: (country: string) => void;
}) {
  return (
    <>
      <form className="lg:mb-12 mb-8 md:flex md:justify-between space-y-8 md:space-y-0">
        <SearchBox
          aria-label="Search for a country"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <SelectBox
          aria-label="Filter by Region"
          className="min-w-select"
          title="Filter by Region"
          options={Object.values(Region)}
          onChange={handleRegionChange}
        />
      </form>
      {loading ? (
        <LoadingMessage />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : countriesList.length < 1 ? (
        <InfoMessage info="No countries found" />
      ) : (
        <CountryList countryList={countriesList} setCountry={setCountry} />
      )}
    </>
  );
}

function CountryList({
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
