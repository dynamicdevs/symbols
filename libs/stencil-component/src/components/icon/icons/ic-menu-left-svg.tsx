import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_menu_left.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_menu_left.svg';

/** @internal **/
@Component({
  tag: 'ic-menu-left-svg',
  shadow: false,
})
export class IconMenuLeftSvg {
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
