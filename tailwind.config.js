/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: '0.75rem' /* 12px */,
      sm: '0.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      lg: ['1.125rem', '1.625rem'] /* 18px,  26px */,
      xl: '1.375rem' /* 22px */,
      '2xl': '1.5rem' /* 24px */,
      '3xl': '2rem' /* 32px */,
    },
    minWidth: {
      select: '12.5rem' /* 200px */,
    },
    extend: {
      boxShadow: {
        header: '0 2px 4px hsl(0 0% 0% / 0.06)',
        box: '0 0 7px 2px hsl(0 0% 0% / 0.03)',
      },
      colors: {
        darkblue: 'hsl(209, 23%, 22%)',
        darkerblue: 'hsl(207, 26%, 17%)',
        verydarkblue: 'hsl(200, 15%, 8%)',
        verylightgrey: 'hsl(0, 0%, 98%)',
        medgrey: 'hsl(0, 0%, 52%)',
      },
      gridTemplateColumns: {
        countries: 'repeat(auto-fill,16.5rem)',
      },
      maxWidth: {
        container: '84rem' /* 1344px (1280 plus padding) */,
      },
      spacing: {
        4.5: '1.125rem' /* 18px */,
        18: '4.5rem' /* 72px */,
        30: '7.5rem' /* 120px */,
        68: '16.5rem' /* 264px */,
      },
      backgroundImage: {
        selecticon: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23111517' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
        selecticondark: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
