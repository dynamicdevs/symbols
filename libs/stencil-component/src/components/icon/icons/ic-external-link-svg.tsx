import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_external_link.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_external_link.svg';

/** @internal **/
@Component({
  tag: 'ic-external-link-svg',
  shadow: false,
})
export class IconExternalLinkSvg {
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
