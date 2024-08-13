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
      'danger' : 'CB3A31',
      'primary-background' : 'ECF3F7',
      'gray' : '#9199a3',
      'danger' : '#CB3A31',
      'white' : '#FFFFFF',
      'white2' : '#F3F7EC',
    },
    fontFamily: {
      'inter': ['"Inter"', 'sans-sherif'],
      'hand-write': ['"Edu VIC WA NT Beginner"', 'cursive'],
    }
  },
  plugins: [],
}

