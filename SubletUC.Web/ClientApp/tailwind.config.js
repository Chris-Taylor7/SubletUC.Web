// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         'arial': ['Arial', 'sans-serif']
//       },
//       colors: {
//         // Custom Colors
//         'schaeffler-green': '#00893d',
//         'carbon-grey': '#646464',
//         'black': '#000000',
//         'nordic-blue': '#1d9bb2',
//         'white': '#ffffff',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' }
//         },
//         popIn: {
//           '0%': { opacity: '0', transform: 'scale(0.9)'},
//           '100%': { opacity: '1', transform: 'scale(1)'}
//         }
//       },
//       animation: {
//         popup: 'fadeIn .1s linear forwards, popIn .1s linear forwards',
//         spinFast: 'spin .8s linear infinite'
//       }
//     },

//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./src/**/*.{html,ts}",
  //   "./projects/**/*.{html,ts}",
  // ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#e00122',
          50: '#ffe5e8',
          100: '#ffccd0',
          200: '#ff99a3',
          300: '#ff6677',
          400: '#ff334a',
          500: '#e00122', // Main red color
          600: '#b1001b',
          700: '#800014',
          800: '#4f000d',
          900: '#1f0006',
        },
        gray: {
          DEFAULT: '#333333',
        },
      },
    },
    plugins: [],
  }
}
