const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      md: '768px', // { min: 768, max: 1023 }
      lg: '1024px', // { min: 1024, max: 1799 }
      xl: '1800px', // { min: 1800 } 
    },
    extend: {
    },
    container: () => ({
      center: true,
    }),
  },
  plugins: [],
}
