import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_eye_hidden.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_eye_hidden.svg';

/** @internal **/
@Component({
  tag: 'ic-eye-hidden-svg',
  shadow: false,
})
export class IconEyeHiddenSvg {
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
