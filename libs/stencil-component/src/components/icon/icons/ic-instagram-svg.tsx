import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_instagram.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_instagram.svg';

/** @internal **/
@Component({
  tag: 'ic-instagram-svg',
  shadow: false,
})
export class IconInstagramSvg {
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
