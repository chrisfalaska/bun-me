import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
      margin: 0 auto;
    }
  `;

  @property()
  name = 'World';

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <p>Welcome to your Lit.js application.</p>
    `;
  }
}

customElements.define('my-element', MyElement);