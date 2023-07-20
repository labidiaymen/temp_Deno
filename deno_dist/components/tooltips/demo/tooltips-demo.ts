/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @license
 * Copyright 2023 Google Laabidi Aymen
 * SPDX-License-Identifier: MIT
 */

import {LitElement, html} from 'npm:lit@2.6.1';
import {customElement, state} from 'npm:lit@2.6.1/decorators.js';

import '../tooltips.component.ts';

@customElement('hy-tooltips-demo')
export class ElMeenuElement extends LitElement {
  @state()
  float = 'left';

  protected override render() {
    return html`
      <tooltip-element>
        <br />
        <br />
        <br />
        <br />

        <button data-tooltip="This is a tooltip" data-tooltip-position="bottom">bottom</button>
        <br />
        <br />
        <div>
          <button data-tooltip="Another tooltip" data-tooltip-position="corner-right">corner-right</button>
        </div>
        <br />
        <div>
          <button data-tooltip="Another tooltip" data-tooltip-position="top">top</button>
        </div>
      </tooltip-element>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hy-tooltips-demo': ElMeenuElement;
  }
}
