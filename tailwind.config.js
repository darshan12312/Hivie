/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Montserrat':[ 'Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(342deg, rgba(246,156,9,1) 44%, rgba(18,147,211,1) 62%)',
      },
    },
  },
  plugins: [],
}

