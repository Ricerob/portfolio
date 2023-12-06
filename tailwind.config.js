/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        cabinet: ['CabinetGrotesk', 'sans-serif'],
        dmserif: ['"DM Serif Display"', 'sans-serif'],
        bubbles: ['"Rubik Bubbles"', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        whisper: ['Whisper', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

