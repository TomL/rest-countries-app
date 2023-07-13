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
      `${API_URL}alpha/VNM`,
      new Promise((resolve) => setTimeout(() => resolve({}), 100)),
    );

    let hookResult: any;
    await act(async () => {
      hookResult = renderHook(() => useFetch('alpha/VNM'));
    });

    // Check the 'loading' state variable is true initially
    expect(hookResult.result.current.loading).toBe(true);
  });

  it('should set error state correctly when fetch fails', async () => {
    fetchMock.mock(`${API_URL}alpha/VNM`, 500);

    let hook: any;
    await act(async () => {
      hook = renderHook(() => useFetch('alpha/VNM'));
      // Wait for the fetch to complete
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    // Check the 'error' state variable is set
    expect(hook.result.current.error).not.toBe('');
  });
});
