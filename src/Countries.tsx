import CountryDetail from '@/components/CountryDetail';
import CountryDetailNav from '@/components/CountryDetailNav';
import { CountryList } from '@/components/CountryList';
import CountryListNav from '@/components/CountryListNav';
import DisplayMessage from '@/components/DisplayMessage';
import useFetchCountryList from '@/hooks/useFetchCountryList';
import { Country, Region } from '@/types/countries';
import { useState } from 'react';

export default function Countries() {
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState<Region | undefined>(undefined);
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    undefined,
  );
  const { countryList, loading, error } = useFetchCountryList(
    searchQuery,
    region,
  );

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

  const handleSelectedCountryChange = (countryCode: string) => {
    setSelectedCountry(
      countryList.find((country) => country.cca3 === countryCode),
    );
  };

  return (
    <>
      {selectedCountry ? (
        <>
          <CountryDetailNav
            handleSelectedCountryChange={handleSelectedCountryChange}
          />
          <DisplayMessage
            loading={loading}
            error={error}
            countryList={countryList}
          />
          {!loading && !error && countryList.length > 0 && (
            <CountryDetail
              country={selectedCountry}
              handleSelectedCountryChange={handleSelectedCountryChange}
            />
          )}
        </>
      ) : (
        <>
          <CountryListNav
            searchQuery={searchQuery}
            handleSearchQueryChange={handleSearchQueryChange}
            handleRegionChange={handleRegionChange}
          />
          <DisplayMessage
            loading={loading}
            error={error}
            countryList={countryList}
          />
          {!loading && !error && countryList.length > 0 && (
            <CountryList
              countryList={countryList}
              handleSelectedCountryChange={handleSelectedCountryChange}
            />
          )}
        </>
      )}
    </>
  );
}
