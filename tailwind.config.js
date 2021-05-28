module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#E1EEFB',
        'regal-pink':'#FFF4EF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
