/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'dark-blue': '#101e3c',
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",

      },
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px #243c5a',
        '2xl': '0px 0px 6px #CCCCCC ',
        '1xl': '0px 0px 5px #CCCCCC',
      },
      
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) {.... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

