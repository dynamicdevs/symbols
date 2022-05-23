import { newSpecPage } from '@stencil/core/testing';
import { SymbolIcon } from './icon.component';

describe('symbol-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SymbolIcon],
      html: '<symbol-icon name="dynamic" iconClass="symbol-sm"></symbol-icon>',
    });
    expect(root).toEqualHtml(`
      <symbol-icon class="symbol-icon-container undefined" iconclass="symbol-sm" name="dynamic" role="img"></symbol-icon>
    `);
  });
});
