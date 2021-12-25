/*
 * @Date: 2021-12-24 15:51:00
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/tailwind.config.js
 */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{html,vue,js}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#E1EEFB',
        'regal-pink': '#FFF4EF',
        lightMode: '#FFF',
        darkMode: '#202124',
      },
      textColor: {
        lightMode: '#24292e',
        darkMode: '#2c3e50',
        FF9100: '#FF9100',
      },
      fontFamily: {
        mersan: [
          'Merriweather Sans',
          'Helvetica',
          'Tahoma',
          'Arial',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft Yahei',
          'WenQuanYi Micro Hei',
          'sans-serif',
        ],
      },
      height: {
        'screen-90vh': 'calc(100vh - 5rem)',
      },
      margin: {
        '-1+1/20': '-1.05rem',
        17: '17rem',
      },
      maxWidth: {
        20: '20rem',
      },
      minWidth: {
        10: '10rem',
        1080: '1080px',
        800: '800px',
      },
      screens: {
        min: '1100px',
      },
    },
  },
  plugins: [],
};
