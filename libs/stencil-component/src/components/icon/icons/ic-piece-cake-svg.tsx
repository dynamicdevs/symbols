import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_piece_cake.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_piece_cake.svg';

/** @internal **/
@Component({
  tag: 'ic-piece-cake-svg',
  shadow: false,
})
export class IconPieceCakeSvg {
  @Prop() iconClass?: string;
  @Prop() type: StyleType = 'solid';

  render() {
    return (
      <Host
        class={`${this.iconClass} symbol-icon-container`}
        innerHTML={this.type === 'solid' ? svgSolidIcon : svgOutlineIcon}
      ></Host>
    );
  }
}
