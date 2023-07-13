/**
 * @jest-environment jsdom
 */

import 'whatwg-fetch';
import { renderHook } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { act } from 'react-test-renderer';
import useFetchCountryList from '@/hooks/useFetchCountryList';
import { API_URL, FIELDS } from '@/constants/constants';
import { Region } from '@/types/countries';

describe('useCountry', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('should return countries list with a successful api request', async () => {
    fetchMock.mock(`${API_URL}name/bang?fields=${FIELDS}`, [
      {
        name: 'Bangladesh',
        alpha3Code: 'BGD',
        region: 'Asia',
        // other country properties...
      },
      {
        name: 'Thailand',
        alpha3Code: 'THA',
        region: 'Asia',
        // other country properties...
      },
      {
        name: 'Barbados',
        alpha3Code: 'BRB',
        region: 'Americas',
        // other country properties...
      },
    ]);

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() =>
        useFetchCountryList('bang', Region['Asia']),
      );
    });

    expect(hookResult.result.current.countryList).toHaveLength(2);
    expect(hookResult.result.current.countryList[0].name).toBe('Bangladesh');
    expect(hookResult.result.current.countryList[1].name).toBe('Thailand');
  });

  it('should make correct API call when only search is provided', async () => {
    fetchMock.mock(`${API_URL}name/test?fields=${FIELDS}`, [
      {
        name: 'Country1',
      },
    ]);

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() => useFetchCountryList('test'));
    });

    expect(hookResult.result.current.countryList).toHaveLength(1);
    expect(hookResult.result.current.countryList[0].name).toBe('Country1');
  });

  it('should make correct API call when only region is provided', async () => {
    fetchMock.mock(`${API_URL}all?fields=${FIELDS}`, [
      {
        name: 'Country1',
        region: 'Europe',
        // other country properties...
      },
      {
        name: 'Country2',
        region: 'Americas',
        // other country properties...
      },
    ]);

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() =>
        useFetchCountryList(undefined, Region['Europe']),
      );
    });

    expect(hookResult.result.current.countryList).toHaveLength(1);
    expect(hookResult.result.current.countryList[0].name).toBe('Country1');
  });

  it('should make correct API call when no parameters are provided', async () => {
    fetchMock.mock(`${API_URL}all?fields=${FIELDS}`, [
      {
        name: 'Country1',
        // other country properties...
      },
    ]);

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() => useFetchCountryList());
    });

    expect(hookResult.result.current.countryList).toHaveLength(1);
    expect(hookResult.result.current.countryList[0].name).toBe('Country1');
  });
});
