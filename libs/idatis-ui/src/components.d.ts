/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InputType } from "./components/idatis-input/models";
export namespace Components {
    interface IdatisButton {
        "disabled": boolean;
        "text": string;
    }
    interface IdatisInput {
        "disabled": boolean;
        "placeholder": string;
        "title": string;
        "type": InputType;
    }
    interface IdatisLink {
        "href": string;
        "text": string;
    }
    interface IdatisMenu {
        "items": string[];
    }
}
declare global {
    interface HTMLIdatisButtonElement extends Components.IdatisButton, HTMLStencilElement {
    }
    var HTMLIdatisButtonElement: {
        prototype: HTMLIdatisButtonElement;
        new (): HTMLIdatisButtonElement;
    };
    interface HTMLIdatisInputElement extends Components.IdatisInput, HTMLStencilElement {
    }
    var HTMLIdatisInputElement: {
        prototype: HTMLIdatisInputElement;
        new (): HTMLIdatisInputElement;
    };
    interface HTMLIdatisLinkElement extends Components.IdatisLink, HTMLStencilElement {
    }
    var HTMLIdatisLinkElement: {
        prototype: HTMLIdatisLinkElement;
        new (): HTMLIdatisLinkElement;
    };
    interface HTMLIdatisMenuElement extends Components.IdatisMenu, HTMLStencilElement {
    }
    var HTMLIdatisMenuElement: {
        prototype: HTMLIdatisMenuElement;
        new (): HTMLIdatisMenuElement;
    };
    interface HTMLElementTagNameMap {
        "idatis-button": HTMLIdatisButtonElement;
        "idatis-input": HTMLIdatisInputElement;
        "idatis-link": HTMLIdatisLinkElement;
        "idatis-menu": HTMLIdatisMenuElement;
    }
}
declare namespace LocalJSX {
    interface IdatisButton {
        "disabled"?: boolean;
        "text"?: string;
    }
    interface IdatisInput {
        "disabled"?: boolean;
        "placeholder"?: string;
        "title"?: string;
        "type"?: InputType;
    }
    interface IdatisLink {
        "href"?: string;
        "text"?: string;
    }
    interface IdatisMenu {
        "items"?: string[];
    }
    interface IntrinsicElements {
        "idatis-button": IdatisButton;
        "idatis-input": IdatisInput;
        "idatis-link": IdatisLink;
        "idatis-menu": IdatisMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "idatis-button": LocalJSX.IdatisButton & JSXBase.HTMLAttributes<HTMLIdatisButtonElement>;
            "idatis-input": LocalJSX.IdatisInput & JSXBase.HTMLAttributes<HTMLIdatisInputElement>;
            "idatis-link": LocalJSX.IdatisLink & JSXBase.HTMLAttributes<HTMLIdatisLinkElement>;
            "idatis-menu": LocalJSX.IdatisMenu & JSXBase.HTMLAttributes<HTMLIdatisMenuElement>;
        }
    }
}
