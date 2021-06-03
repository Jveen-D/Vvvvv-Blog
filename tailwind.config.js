module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#E1EEFB',
        'regal-pink':'#FFF4EF',
        'lightMode':'#FFF',
        'darkMode': '#202124'
      },
      textColor:{
        'lightMode':'#24292e',
        'darkMode':'#2c3e50'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
