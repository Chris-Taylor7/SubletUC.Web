/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': ['Arial', 'sans-serif']
      },
      colors: {
        // Custom Colors
        'schaeffler-green': '#00893d',
        'carbon-grey': '#646464',
        'black': '#000000',
        'nordic-blue': '#1d9bb2',
        'white': '#ffffff',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)'},
          '100%': { opacity: '1', transform: 'scale(1)'}
        }
      },
      animation: {
        popup: 'fadeIn .1s linear forwards, popIn .1s linear forwards',
        spinFast: 'spin .8s linear infinite'
      }
    },

  },
  plugins: [],
}


