/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF8F00',
        'secondary': {
          100: '#59FFCB',
          200: '#888883',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF9A59",
          "secondary": "#59FFCB",
          // other colors you want to customize for your theme
        },
      },
    ],
  },
};