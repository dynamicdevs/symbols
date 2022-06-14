import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_panda.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_panda.svg';

/** @internal **/
@Component({
  tag: 'ic-panda-svg',
  shadow: false,
})
export class IconPandaSvg {
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
