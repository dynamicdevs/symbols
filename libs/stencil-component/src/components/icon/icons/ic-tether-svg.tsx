import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_tether.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_tether.svg';

/** @internal **/
@Component({
  tag: 'ic-tether-svg',
  shadow: false,
})
export class IconTetherSvg {
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
