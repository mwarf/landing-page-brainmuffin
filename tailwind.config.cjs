/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#FFDA61',
        'primary-white': '#FFFFFF',
        'secondary-lilac': '#C8A2C8',
        'secondary-teal': '#ADD8E6',
        'secondary-rose': '#E7A1A8',
        'neutral-light': '#F0F0F0',
        'neutral-medium': '#999999'
      },
      fontFamily: {
        heading: ['Space Grotesk Variable', 'sans-serif'],
        body: ['Geist Variable', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
