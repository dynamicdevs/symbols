import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-component',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: '@symbol/stencil-component',
      proxiesFile:
        '../../../libs/stencil-component-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
