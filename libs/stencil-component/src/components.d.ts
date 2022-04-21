/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { StyleType } from "./types";
export namespace Components {
    interface SymbolIcon {
        "iconClass"?: string;
        "name": string;
        "type": StyleType;
    }
}
declare global {
    interface HTMLSymbolIconElement extends Components.SymbolIcon, HTMLStencilElement {
    }
    var HTMLSymbolIconElement: {
        prototype: HTMLSymbolIconElement;
        new (): HTMLSymbolIconElement;
    };
    interface HTMLElementTagNameMap {
        "symbol-icon": HTMLSymbolIconElement;
    }
}
declare namespace LocalJSX {
    interface SymbolIcon {
        "iconClass"?: string;
        "name"?: string;
        "type"?: StyleType;
    }
    interface IntrinsicElements {
        "symbol-icon": SymbolIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "symbol-icon": LocalJSX.SymbolIcon & JSXBase.HTMLAttributes<HTMLSymbolIconElement>;
        }
    }
}
