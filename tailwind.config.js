const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./apps/portfolio/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
