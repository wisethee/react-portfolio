/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./apps/portfolio/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display-large': [
          '6rem',
          {
            lineHeight: '6rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'display-medium': [
          '4.5rem',
          {
            lineHeight: '4.5rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'display-small': [
          '3.75rem',
          {
            lineHeight: '3.75rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'headline-large': [
          '3rem',
          {
            lineHeight: '3.5rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'headline-medium': [
          '2.5rem',
          {
            lineHeight: '3rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'headline-small': [
          '2.25rem',
          {
            lineHeight: '2.75rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'title-large': [
          '2rem',
          {
            lineHeight: '2.5rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'title-medium': [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'title-small': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'label-large': [
          '1.125rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '.03em',
            fontWeight: '700',
          },
        ],
        'label-medium': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '.03em',
            fontWeight: '700',
          },
        ],
        'label-small': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '.03em',
            fontWeight: '700',
          },
        ],
        'body-large': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '.03em',
            fontWeight: '400',
          },
        ],
        'body-medium': [
          '1.125rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '.03em',
            fontWeight: '400',
          },
        ],
        'body-small': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '.03em',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        light: {
          primary: '#F54865',
          'on-primary': '#FFFFFF',
          'primary-container': '#FEF0F3',
          'on-primary-container': '#3E4350',
          secondary: '#FF8B68',
          'on-secondary': '#FFFFFF',
          'secondary-container': '#FFF6F3',
          'on-secondary-container': '#3E4350',
          surface: '#FFFFFF',
          'on-surface': '#242938',
          'surface-variant': '#F6F6F7',
          'on-surface-variant': '#3E424F',
        },
      },
    },
  },
  plugins: [],
};
