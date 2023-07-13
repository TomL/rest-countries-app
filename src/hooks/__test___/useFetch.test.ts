/**
 * @jest-environment jsdom
 */

import 'whatwg-fetch';
import { renderHook } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { act } from 'react-test-renderer';
import useFetch from '@/hooks/useFetch';
import { API_URL } from '@/constants/constants';

describe('useFetch', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('should set loading state correctly', async () => {
    fetchMock.mock(
      `${API_URL}all2`,
      new Promise((resolve) => setTimeout(() => resolve({}), 100)),
    );

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() => useFetch('all2'));
    });

    expect(hookResult.result.current.loading).toBe(true);
  });

  it('should set error state correctly when fetch fails', async () => {
    fetchMock.mock(`${API_URL}all`, 500);

    let hook: any;
    await act(async () => {
      hook = renderHook(() => useFetch('all'));
    });

    expect(hook.result.current.error).not.toBe('');
  });

  it('should set countryList to an empty array when fetch returns 404', async () => {
    fetchMock.mock(`${API_URL}all4`, 404);

    let hook: any;
    await act(async () => {
      hook = renderHook(() => useFetch('all4'));
    });

    expect(hook.result.current.countryList).toEqual([]);
  });
});
