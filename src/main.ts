import {
  LitElement,
  TemplateResult,
  html,
  customElement,
  property
} from "lit-element";
import { HomeAssistant } from "custom-card-helpers";
import { Route } from "./data";
import "./LoadUIElements";

@customElement("hacs-frontend")
class HacsFrontend extends LitElement {
  @property({ type: Boolean }) public narrow!: boolean;
  @property({ type: Object }) public hass!: HomeAssistant;
  @property({ type: Object }) public route!: Route;

  setModalCSS() {
    if (document.getElementById("modal-style")) return;
    var element = document.body;
    var style = document.createElement("style");
    style.id = "modal-style";
    style.innerHTML = `
      .swal-modal {
          background-color: var(--primary-background-color) !important;
          text-align: left;
      }
      .swal-text {
          color: var(--primary-text-color) !important;
      }
      .swal-button {
          background-color: var(--primary-color) !important;
          color: var(--primary-text-color) !important;
      }
      .swal-text:first-child {
        margin: 16px 0px 0px 8px;
      }`;
    element.appendChild(style);
  }

  protected render(): TemplateResult | void {
    this.setModalCSS();
    return html`
      <hacs-frontendbase
        .hass=${this.hass}
        .route=${this.route}
        .narrow=${this.narrow}
      >
      </hacs-frontendbase>
    `;
  }
}
