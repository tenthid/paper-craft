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
      'border-gray' : '#ACACAC',
      'red' : '#CB3A31',
      'danger' : '#CB3A31',
      'white' : '#FFFFFF',
      'white2' : '#F3F7EC',
      'primary1' : '#006989',
      'black' : '#000000',
      'blue' : '#365486',
      'prime-gray' : '#7A8089',
      'dark-blue' : '#483EA8'
    },
    fontFamily: {
      'inter': ['"Inter"', 'sans-sherif'],
      'hand-write': ['"Kalam"', 'sans-serif'],
      'maitree': ['"Maitree"', 'serif'],
      'poppins': ['"Poppins"', 'serif'],
      'montserrat' : ['"montserrat"', 'serif'],
      'dm-sans' : ['"DM Sans"', 'sans-serif'],
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

