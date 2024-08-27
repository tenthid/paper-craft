/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary' : '#005C78',
      'primary-1' : '#006989',
      'danger' : '#CB3A31',
      'primary-background' : '#ECF3F7',
      'gray' : '#9199a3',
      'danger' : '#CB3A31',
      'white' : '#FFFFFF',
      'white2' : '#F3F7EC',
      'primary1' : '#006989',
      'black' : '#000000',
      'gray-1' : '#5B5B5B',
      'gray-2' : '#808080',
      'gray-3' : '#404040',
      'gray-4' : '#dedede',
      'gray-5' : '#707070',
      'gray-6' : '#616161',
      'gray-7' : '#EDEDED',
      'pisang-ijo' : '#10AF13',
      'bilu' : '#009fd3',
      'logout' : '#feecec',
      'light-gray' : '#EDEDED'
    },
    fontFamily: {
      'inter': ['"Inter"', 'sans-sherif'],
      'hand-write': ['"Kalam"', 'sans-serif'],
      'maitree': ['"Maitree"', 'serif']
    },
    screens: {
      'phone-s' : '320px',
      'phone-m' : '375px',
      'phone-l' : '425px',
      'tablet' : '768px',
      'laptop' : '1024px',
      'laptop-l' : '1440px',
    }
  },
  plugins: [],
}

