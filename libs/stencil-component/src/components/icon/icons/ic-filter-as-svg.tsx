import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_filter_as.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_filter_as.svg';

/** @internal **/
@Component({
  tag: 'ic-filter-as-svg',
  shadow: false,
})
export class IconFilterAsSvg {
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
