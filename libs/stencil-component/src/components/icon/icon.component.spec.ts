import { newSpecPage } from '@stencil/core/testing';
import { SymbolIcon } from './icon.component';

describe('symbol-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SymbolIcon],
      html: '<symbol-icon name="dynamic"></symbol-icon>',
    });

    const symbolElement = root.shadowRoot.querySelector(
      '.symbol-icon-container'
    );

    expect(symbolElement).toEqualHtml(
      '<span class="symbol-icon-container undefined"></span>'
    );
  });

  it('it is classname renders right', async () => {
    const { root } = await newSpecPage({
      components: [SymbolIcon],
      html: '<symbol-icon name="dynamic" icon-class="symbol-md"></symbol-icon>',
    });

    const symbolElement = root.shadowRoot.querySelector(
      '.symbol-icon-container'
    );

    expect(symbolElement).toHaveClass('symbol-md');
  });
});
