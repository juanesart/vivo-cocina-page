/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#361012',
        secondary: '#E62C26',
        hoverPri: 'rgba(243, 147, 126, 0.4)',
        hoverSec: '#BEBDBD',
        bgSalud: 'rgba(148, 202, 228, 0.4)',
        bgSand: 'rgba(243, 200, 126, 0.4)'
      },
    },
  },
  plugins: [],
};
