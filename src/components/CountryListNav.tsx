import { SearchBox, SelectBox } from '@/components/UI/Inputs';
import { Region } from '@/types/countries';

export default function CountryListNav({
  searchQuery,
  region,
  handleSearchQueryChange,
  handleRegionChange,
}: {
  searchQuery: string;
  region: Region | undefined;
  handleSearchQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
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
        value={region}
      />
    </form>
  );
}
