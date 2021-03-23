import { LitElement, html, css } from "lit-element";

class MyMessage extends LitElement {
    // Se crean las propiedades
    static get properties() {
        return {
            message: { type: String },
        };
    }

    // Se inicialian las propiedades
    constructor() {
        super();
    }

    // Asignar las propiedades al template
    render() {
        return html` <div>Message: ${this.message}</div> `;
    }
}

customElements.define("my-message", MyMessage);
