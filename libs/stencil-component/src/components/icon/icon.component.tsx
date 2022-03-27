import { Build, Component, getAssetPath, h, Host, Prop, State, Watch } from "@stencil/core";
import { getSVGContent, ICONS_CONTENT } from "../../utils";

type StyleType = 'solid' | 'outline';
@Component({
  tag: 'symbol-icon',
  styleUrl: 'icon.component.scss',
  shadow: false,
  scoped: true,
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
  private loadIcon(): void {
    if (!Build.isBrowser) {
      return;
    }
    const url: string = getAssetPath(`../assets/icons/${this.type}/${this.name}.svg`);

    if (ICONS_CONTENT.has(url)) {
      this.svgContent = ICONS_CONTENT.get(url);
    } else {
      getSVGContent(url).then(() => (this.svgContent = ICONS_CONTENT.get(url)));
    }
  }

  render() {
    return (
      <Host role="img" class={`${this.iconClass} symbol-icon-container`} innerHTML={this.svgContent}>
      </Host>
    );
  }

}
