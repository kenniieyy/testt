// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./public/**/*.{html,js}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#2040AE',
        secondary: '#FFA725',
        'primary-light': '#4060CE',
        'primary-dark': '#102080',
        'secondary-light': '#FFB745',
        'secondary-dark': '#E08000',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}


