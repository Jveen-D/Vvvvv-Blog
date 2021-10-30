module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
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
        'screen-90vh': 'calc(100vh - 5rem)',
        'util':'calc(100vh - 9rem)'
      },
      margin: {
        '-1+1/20': '-1.05rem',
        '17':'17rem'
      },
      maxWidth:{
        '20':'20rem',
      },
      minWidth:{
        '10':'10rem',
        '1080':'1080px',
        '800':'800px'
      },
      screens:{
        'min':'1100px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  important: '#app',
}
