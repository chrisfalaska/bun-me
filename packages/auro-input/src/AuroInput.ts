import { LitElement, html, css } from 'lit';

export class MyInput extends LitElement {
  static styles = css`
    input {
      border: 1px solid #ccc;
      padding: 5px;
    }
  `;

  render() {
    return html`
      <input type="text" placeholder="Enter text">
    `;
  }
}

customElements.define('my-input', MyInput);