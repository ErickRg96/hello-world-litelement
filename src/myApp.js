// Basic required imports
import { LitElement, html, css } from "lit-element";
import "./helloWorld";
import "./my-list";

// Create a class form your component and extend the LitElement
class MyApp extends LitElement {
    static get properties() {
        return {
            items: { type: Array },
        };
    }

    constructor() {
        super();
        this.items = [
            { id: 0, name: "Interstellar", year: 2014 },
            { id: 1, name: "The Martian", year: 2015 },
            { id: 2, name: "Batman: The Dark Night", year: 2008 },
            { id: 3, name: "Matrix", year: 1999 },
            { id: 5, name: "Batman v Superman", year: 2016 },
        ];
    }

    render() {
        // Return the template using the html template tag and create the DOM elements
        // return html` <hello-world></hello-world> `;
        return html`
            <my-list .items=${this.items} title="My Favorite Movies"></my-list>
        `;
    }
}

// Register yout element to sutom elements
customElements.define("my-app", MyApp);
