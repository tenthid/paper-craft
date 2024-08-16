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
      'white3' : '#D9D9D9'
    },
    fontFamily: {
      'inter': ['"Inter"', 'sans-sherif'],
      'hand-write': ['"Kalam"', 'sans-serif'],
      'maitree': ['"Maitree"', 'serif']
    },
  },
  plugins: [],
}

