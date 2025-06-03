/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './assets/**/*.vue',
  ],
  theme: {
    extend: {
      screens: {
        'max-sm':{'max': '480px'},
      },
      colors: {
        peach: '#FFE3CE',
        retrored: '#8D0027',
        retrogreen: '#2DAF91',
        retroyellow: '#F1A514',
        retroorange: '#DA4011',
        ligthgray: '#F3F4F6',
        lightteal: '#E0F2F1',
        lightpeach: '#FAF3E0',
        grayblue: '#E5EAF2',
        darkcontrast: '#1F2937',
      },
    },
  },
  plugins: [],
}

