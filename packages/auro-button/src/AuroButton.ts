import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('auro-button')
export class AuroButton extends LitElement {
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