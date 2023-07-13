/**
 * @jest-environment jsdom
 */

import { renderHook, act } from '@testing-library/react';
import useDarkMode from '../useDarkMode';

describe('useDarkMode', () => {
  let matchMediaMock: any;
  beforeEach(() => {
    matchMediaMock = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    Object.defineProperty(window, 'matchMedia', {
      value: matchMediaMock,
      writable: true,
    });

    // Mock root class list
    Object.defineProperty(document.documentElement, 'classList', {
      value: {
        add: jest.fn(),
        remove: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    matchMediaMock.mockClear();
    // reset html document
    document.getElementsByTagName('html')[0].innerHTML = '';
    window.localStorage.clear();
  });

  it('should respect the OS dark mode preference', () => {
    // Mock matchMedia
    matchMediaMock.mockReturnValue({
      matches: true, // Set the desired value for the test case
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    const { result } = renderHook(() => useDarkMode());
    expect(result.current.darkMode).toBe(true);
    expect(window.localStorage.getItem('darkMode')).toBe('true');
    expect(document.documentElement.classList.add).toBeCalledWith('dark');
  });

  it('should toggle dark mode', () => {
    const { result } = renderHook(() => useDarkMode());

    expect(result.current.darkMode).toBe(false);
    expect(window.localStorage.getItem('darkMode')).toBe('false');

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.darkMode).toBe(true);
    expect(window.localStorage.getItem('darkMode')).toBe('true');
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('dark');

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.darkMode).toBe(false);
    expect(window.localStorage.getItem('darkMode')).toBe('false');
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
      'dark',
    );
  });

  it('should return a function to toggle dark mode', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(typeof result.current.toggleDarkMode).toBe('function');
  });
});
