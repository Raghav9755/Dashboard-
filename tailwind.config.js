/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
        neon: '#c7ff00', // Neon green color
        dark: '#0a0a0a', // Dark background color
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

