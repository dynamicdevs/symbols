import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_filter_sort.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_filter_sort.svg';

/** @internal **/
@Component({
  tag: 'ic-filter-sort-svg',
  shadow: false,
})
export class IconFilterSortSvg {
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
