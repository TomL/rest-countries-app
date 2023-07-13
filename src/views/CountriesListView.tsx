import { SearchBox, SelectBox } from '@/components/UI/input';
import CountryList from '@/components/countryList';
import { Country, Region } from '@/types/types';
import LoadingView from '@/views/Loading';

export default function CountriesListView({
  countriesList,
  loading,
  searchQuery,
  handleSearchQueryChange,
  handleRegionChange,
  setCountry,
}: {
  countriesList: Country[];
  loading: boolean;
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
        <LoadingView />
      ) : (
        <CountryList countryList={countriesList} setCountry={setCountry} />
      )}
    </>
  );
}
