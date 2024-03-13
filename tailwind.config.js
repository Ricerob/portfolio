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
        baskerville: ['"Libre Baskerville"', 'serif'],
        helvetica: ['Helvetica', 'serif'],
        stix: ['STIXGeneral', 'serif']
      },
    },
    colors: {
      'white': '#FFFFF4',
      'l-brown': '#B8B0A3',
      'brown': '#513D2A',
      'd-green': '#294126',
      'l-green': '#889886'
    }
  },
  plugins: [],
}

