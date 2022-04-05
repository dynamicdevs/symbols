module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '312px', // pantalla 360
      md: '688px', // pantalla 768
      lg: '944px', // pantalla 1024
      xl: '1320px',  // pantalla 1440
      '2xl': '1680px', // pantalla 1920
      'only-sm': { max: '687px' },
      'only-md': { min: '688px', max: '943px' },
      'only-lg': { min: '944px', max: '1319px' },
      'only-xl': { min: '1320px', max: '1679px' },
    },
    extend: {
    },
  },
  plugins: [],
}
