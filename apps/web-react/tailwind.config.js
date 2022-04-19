const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const themeDynamic = require('../../settings/tailwind/theme-dynamic');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: themeDynamic,
  plugins: [],
}
