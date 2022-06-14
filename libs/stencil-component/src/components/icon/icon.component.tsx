import { Component, h, Host, Prop } from '@stencil/core';
import { StyleType } from '../../types';
import { iconName } from '../../utils/icon.util';

@Component({
  tag: 'symbol-icon',
  styleUrl: 'icon.component.scss',
  shadow: true,
  scoped: false,
})
export class SymbolIcon {
  @Prop() name: string;
  @Prop() iconClass?: string;
  @Prop() type: StyleType = 'solid';

  render() {
    const SVG = `ic-${iconName[this.name]}-svg`;

    return (
      <Host role="img">
        <SVG
          iconClass={`${this.iconClass} symbol-icon-container`}
          type={this.type}
        ></SVG>
      </Host>
    );
  }
}
