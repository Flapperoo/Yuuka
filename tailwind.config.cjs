/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      ykpurple: '#23203a',
      yklightblue: '#3baefb',
      yklightpurple: '#605a94',
      ykwhite: '#F5F5F5',
      ykgray: '#B9B8BF',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
