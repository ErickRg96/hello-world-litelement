import { LitElement, html, css } from "lit-element";

class MyList extends LitElement {
    // Se crean las propiedades
    static get properties() {
        return {
            title: { type: String },
            items: { type: Object },
        };
    }

    // Se inicialian las propiedades
    constructor() {
        super();
        this.items = [];
    }

    // Asignar las propiedades al template
    render() {
        return html`
            <h1>${this.title}</h1>
            <ul>
                ${this.items.map(
                    (item) => html` <li>${item.name} (${item.year})</li> `
                )}
            </ul>
        `;
    }
}

customElements.define("my-list", MyList);
