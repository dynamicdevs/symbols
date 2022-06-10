import { Build, Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { StyleType } from '../../types';

import dynamicOutline from '../../assets/icons/outline/ic_dynamic.svg';
import dynamicSolid from '../../assets/icons/solid/ic_dynamic.svg';
import symbolOutline from '../../assets/icons/outline/ic_symbol.svg';
import symbolSolid from '../../assets/icons/solid/ic_symbol.svg';

import {
  getIconContent,
  ICONS_OUTLINE_CONTENT,
  ICONS_SOLID_CONTENT,
} from '../../utils';

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
  @State() private svgContent?: string;

  public connectedCallback() {
    this.loadIcon();
  }

  @Watch('name')
  @Watch('type')
  private loadIcon(): void {
    if (!Build.isBrowser) {
      return;
    }
    if (this.type === 'solid') {
      this.getSolidIcon(this.name);
    } else {
      this.getOutlineIcon(this.name);
    }
  }

  render() {
    return (
      <Host role="img">
        <span
          class={`${this.iconClass} symbol-icon-container`}
          innerHTML={
            this.name === 'dynamic'
              ? this.type === 'solid'
                ? dynamicSolid
                : dynamicOutline
              : this.name === 'symbol'
              ? this.type === 'solid'
                ? symbolSolid
                : symbolOutline
              : this.svgContent
          }
        ></span>
      </Host>
    );
  }

  private async getSolidIcon(name: string) {
    if (ICONS_SOLID_CONTENT.has(name)) {
      this.svgContent = ICONS_SOLID_CONTENT.get(name);
    } else {
      getIconContent(name, 'solid').then(() => {
        this.svgContent = ICONS_SOLID_CONTENT.get(name);
      });
    }
  }

  private async getOutlineIcon(name: string) {
    if (ICONS_OUTLINE_CONTENT.has(name)) {
      this.svgContent = ICONS_OUTLINE_CONTENT.get(name);
    } else {
      getIconContent(name, 'outline').then(() => {
        this.svgContent = ICONS_OUTLINE_CONTENT.get(name);
      });
    }
  }
}
