import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_eye_view.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_eye_view.svg';

/** @internal **/
@Component({
  tag: 'ic-eye-view-svg',
  shadow: false,
})
export class IconEyeViewSvg {
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
