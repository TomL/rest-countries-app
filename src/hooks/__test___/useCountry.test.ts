/**
 * @jest-environment jsdom
 */

import 'whatwg-fetch';
import { renderHook } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { act } from 'react-test-renderer';
import useCountry from '@/hooks/useCountry';
import { API_URL, FIELDS_DETAILS } from '@/constants/constants';

describe('useCountry', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('should return data with a successful api request', async () => {
    fetchMock.mock(`${API_URL}alpha/VNM?fields=${FIELDS_DETAILS}`, [
      {
        name: 'Vietnam',
        alpha3Code: 'VNM',
        // other country properties...
      },
    ]);

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() => useCountry('VNM'));
    });

    expect(hookResult.result.current.countriesList).toStrictEqual([
      {
        name: 'Vietnam',
        alpha3Code: 'VNM',
        // other country properties...
      },
    ]);
  });

  it('should set loading state correctly', async () => {
    fetchMock.mock(
      `${API_URL}alpha/VNM?fields=${FIELDS_DETAILS}`,
      new Promise((resolve) => setTimeout(() => resolve({}), 100)),
    );

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() => useCountry('VNM'));
    });

    expect(hookResult.result.current.loading).toBe(true);
  });

  it('should set error state correctly when fetch fails', async () => {
    fetchMock.mock(`${API_URL}alpha/VNM?fields=${FIELDS_DETAILS}`, 500);

    let hook: any;
    await act(async () => {
      hook = renderHook(() => useCountry('VNM'));
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(hook.result.current.error).not.toBe('');
  });
});
