import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_sushi.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_sushi.svg';

/** @internal **/
@Component({
  tag: 'ic-sushi-svg',
  shadow: false,
})
export class IconSushiSvg {
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
