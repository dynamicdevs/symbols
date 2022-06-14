import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_menu_right.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_menu_right.svg';

/** @internal **/
@Component({
  tag: 'ic-menu-right-svg',
  shadow: false,
})
export class IconMenuRightSvg {
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
