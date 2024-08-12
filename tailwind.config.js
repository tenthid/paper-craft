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
      'primary-background' : 'ECF3F7'
    },
    fontFamily: {
      'inter': ['"Inter"', 'sans-sherif']
    }
  },
  plugins: [],
}

