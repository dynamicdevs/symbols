import { Component, h, Prop, Host } from '@stencil/core';
import { StyleType } from '../../../types';

import svgSolidIcon from '../../../assets/icons/solid/ic_notion.svg';
import svgOutlineIcon from '../../../assets/icons/outline/ic_notion.svg';

/** @internal **/
@Component({
  tag: 'ic-notion-svg',
  shadow: false,
})
export class IconNotionSvg {
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
