import useCountries from '@/hooks/useCountries';
import { Region } from '@/types/countries';
import CountriesListView from '@/views/CountriesListView';
import CountryDetailView from '@/views/CountryDetailView';
import { useState } from 'react';

export default function Countries() {
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState<Region | undefined>(undefined);
  const [country, setCountry] = useState<string>('');
  const { countriesList, loading, error } = useCountries(searchQuery, region);

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === '') {
      setRegion(undefined);
    } else if (Object.values(Region).includes(event.target.value as Region)) {
      setRegion(event.target.value as Region);
    }
  };

  if (country) {
    return <CountryDetailView countryCode={country} setCountry={setCountry} />;
  } else {
    return (
      <CountriesListView
        countriesList={countriesList}
        loading={loading}
        error={error}
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
        handleRegionChange={handleRegionChange}
        setCountry={setCountry}
      />
    );
  }
}
