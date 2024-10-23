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
        hoverPri: 'rgba(255, 94, 59, 0.3)',
        hoverSec: '#BEBDBD',
        bgSalud: 'rgba(148, 202, 228, 0.4)',
        bgSand: 'rgba(243, 200, 126, 0.4)',
        bgBebidas: 'rgba(88, 245, 119, 0.4)',
        bgCenas: 'rgba(119, 88, 245, 0.3)',
        bgPaella: 'rgba(245, 119, 88, 0.4)',
        bgMexicano: 'rgba(245, 142, 66, 0.4)'        
      },
      screens: {
        '3xl': '1720px',
      },
    },
  },
  plugins: [],
};
