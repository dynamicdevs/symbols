import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_twitch.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_twitch.svg';

/** @internal **/
@Component({
  tag: 'ic-twitch-svg',
  shadow: false,
})
export class IconTwitchSvg {
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
