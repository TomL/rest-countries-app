/**
 * @jest-environment jsdom
 */

import 'whatwg-fetch';
import { renderHook } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { act } from 'react-test-renderer';
import useCountry from '@/hooks/useCountry';
import { API_URL } from '@/constants/constants';

describe('useCountry', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('should return data with a successful api request', async () => {
    // Tell the test that any request to 'test.com' should return 'returnedData: "foo"'
    fetchMock.mock(`${API_URL}?alpha3Code=VNM`, {
      returnedData: [
        {
          name: 'Vietnam',
          alpha3Code: 'VNM',
          // other country properties...
        },
      ],
    });

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() => useCountry('VNM'));
    });

    // Check the 'data' state variable has the same mocked data from earlier
    expect(hookResult.result.current.countriesList).toStrictEqual({
      returnedData: [
        {
          name: 'Vietnam',
          alpha3Code: 'VNM',
          // other country properties...
        },
      ],
    });
  });

  it('should set loading state correctly', async () => {
    fetchMock.mock(
      `${API_URL}?alpha3Code=VNM`,
      new Promise((resolve) => setTimeout(() => resolve({}), 100)),
    );

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() => useCountry('VNM'));
    });

    // Check the 'loading' state variable is true initially
    expect(hookResult.result.current.loading).toBe(true);
  });

  it('should set error state correctly when fetch fails', async () => {
    fetchMock.mock(`${API_URL}?alpha3Code=VNM`, 500);

    let hook: any;
    await act(async () => {
      hook = renderHook(() => useCountry('VNM'));
      // Wait for the fetch to complete
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    // Check the 'error' state variable is set
    expect(hook.result.current.error).not.toBe('');
  });
});
