/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBrown: '#2B2B2B',
        primaryBrown: '#3B3B3B',
        primaryPurple: '#A259FF',
        shadowBG: 'rgba(59, 59, 59, 0.50)',
        gradientBG: 'rgba(162, 89, 255, 0.00)',
      },
    },
    fontFamily: {
      'SpaceMono': ['"Space Mono"', 'sans-serif'],
      'WorkSans': ['"Work Sans"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}