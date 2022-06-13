import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_microphone.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_microphone.svg';

/** @internal **/
@Component({
  tag: 'ic-microphone-svg',
  shadow: false,
})
export class IconMicrophoneSvg {
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
