import { newSpecPage } from '@stencil/core/testing';
import { SymbolIcon } from './icon.component';

describe('symbol-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SymbolIcon],
      html: '<symbol-icon name="dynamic"></symbol-icon>',
    });

    expect(true).toBeTruthy();
  });

});
