import { LitElement, html, css } from 'lit';

export class MyButton extends LitElement {
  static styles = css`
    button {
      background-color: blue;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <button><slot></slot></button>
    `;
  }
}

customElements.define('my-button', MyButton);