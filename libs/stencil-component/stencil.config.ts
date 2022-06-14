import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';
import { svgOptimizerPlugin } from './src/utils/rollup.utils';

import { reactOutputTarget } from '@stencil/react-output-target';
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'symbol',
  taskQueue: 'async',
  plugins: [sass(), svgOptimizerPlugin()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: './assets', dest: 'assets' }],
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
      componentCorePackage: '@dynamic-devs/symbol',
      proxiesFile:
        '../../../libs/stencil-component-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),

    angularOutputTarget({
      componentCorePackage: '@dynamic-devs/symbol',
      directivesProxyFile:
        '../../../libs/stencil-component-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../libs/stencil-component-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
