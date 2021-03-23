import { LitElement, html, css } from "lit-element";
import "./my-message";

class HelloWorld extends LitElement {
    // Se crean las propiedades
    static get properties() {
        return {
            message: { type: String },
        };
    }

    // Se inicialian las propiedades
    constructor() {
        super();
        this.message = "Dynamic Message";
    }

    // Asignar las propiedades al template
    render() {
        return html`
            <my-message message="Static message"></my-message>
            <my-message message=${this.message}></my-message>
        `;
    }
}

customElements.define("hello-world", HelloWorld);
