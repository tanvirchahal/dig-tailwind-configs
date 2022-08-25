/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    {
      pattern: /.*/,
    },
  ],
  theme: {
    colors: {
      'blue': '#2b6cb0',
      'white': '#fffff',
      'red': '#c53030',
      'black': '#000000',
      'purple': '#6b46c1',
      'pink': '#b83280',
      'orange': '#f6ad55',
      'green': '#68d391',
      'yellow': '#ecc94b',
      'gray-dark': '#2d3748',
      'gray': '#718096',
      'gray-light': '#cbd5e0',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}