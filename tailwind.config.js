module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#E1EEFB',
        'regal-pink': '#FFF4EF',
        'lightMode': '#FFF',
        'darkMode': '#202124'
      },
      textColor: {
        'lightMode': '#24292e',
        'darkMode': '#2c3e50',
        'FF9100': '#FF9100'
      },
      fontFamily: {
        'mersan': ['Merriweather Sans', 'Helvetica', 'Tahoma', 'Arial', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', 'sans-serif']
      },
      height: {
        'screen-90vh': 'calc(100vh - 5rem)'
      },
      margin: {
        '-1+1/20': '-1.05rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  important: '#app',
}
