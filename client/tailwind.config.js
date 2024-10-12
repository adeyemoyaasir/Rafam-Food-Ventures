/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#52c505',
        'white': '#fff',
        'transparent-bg': 'rgba(0, 0, 0, 0.8)',

        'text-black': '#000'
      },
      screens: {
        'medium-pc' : {'max': '1300px'},
        'small-pc': {'max': '950px'},
        'tablet': {'max': '700px'},
        'phone': {'max': '500px'},
        'small-phone': {'max': '450px'},
      },
    },
  },


  plugins: [],
}



