import { Build, Component, h, Host, Prop, State, Watch } from "@stencil/core";
import { getIconContent, ICONS_OUTLINE_CONTENT, ICONS_SOLID_CONTENT } from "../../utils";

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
  @State() private svgContent?: string | void;

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
      <Host role="img" class={`${this.iconClass} symbol-icon-container`} innerHTML={this.svgContent}>
      </Host>
    );
  }

  private async getSolidIcon(name: string) {
    if (ICONS_SOLID_CONTENT.has(name)) {
      this.svgContent = ICONS_SOLID_CONTENT.get(name);
    } else {
      getIconContent(name, 'solid').then(() => {
        this.svgContent = ICONS_SOLID_CONTENT.get(name)
      });
    }
  }

  private async getOutlineIcon(name: string) {
    if (ICONS_OUTLINE_CONTENT.has(name)) {
      this.svgContent = ICONS_OUTLINE_CONTENT.get(name);
    } else {
      getIconContent(name, 'outline').then(() => {
        this.svgContent = ICONS_OUTLINE_CONTENT.get(name)
      });
    }
  }

}
