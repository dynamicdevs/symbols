import { Build, Component, getAssetPath, h, Host, Prop, State, Watch } from "@stencil/core";
import { getSVGContent, ICONS_CONTENT } from "../../utils";

@Component({
  tag: 'symbol-icon',
  styleUrl: 'icon.component.scss',
  shadow: false,
})
export class SymbolIcon {
  @Prop() name: string;
  @Prop() iconClass?: string;
  @Prop() style: string = 'solid';
  @State() private svgContent?: string;

  public connectedCallback() {
    this.loadIcon();
  }

  @Watch('name')
  private loadIcon(): void {
    if (!Build.isBrowser) {
      return;
    }
    const url: string = getAssetPath(`../assets/icons/${this.style}/${this.name}.svg`);

    if (ICONS_CONTENT.has(url)) {
      this.svgContent = ICONS_CONTENT.get(url);
    } else {
      getSVGContent(url).then(() => (this.svgContent = ICONS_CONTENT.get(url)));
    }
  }

  render() {
    return (
      <Host role="img" class={this.iconClass} innerHTML={this.svgContent}>
      </Host>
    );
  }

}
