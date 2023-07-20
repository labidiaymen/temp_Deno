/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @license
 * Copyright 2023 Google Laabidi Aymen
 * SPDX-License-Identifier: MIT
 */

import {LitElement, html} from 'npm:lit@2.6.1';
import {customElement, state} from 'npm:lit@2.6.1/decorators.js';

import '../select.component.ts';
import '../../dropdown/hy-dropdown.component.ts';
import '../../button/hy-button.component.ts';
import '../../tabs/tabs.component.ts';
import '../../input/input.component.ts';

@customElement('hy-select-demo')
export class SlectDemoElement extends LitElement {
  @state()
  dropdwon2Selected!: any;
  @state()
  dropdwon4Selected!: any;

  @state()
  search = '';

  @state()
  dropdwon4isOpen!: boolean;

  placeholderDropdown2 = 'file';

  @state()
  options = [
    {
      label: 'name option 1',
    },
    {
      label: 'latname option 1',
    },
    {label: 'clear 2'},
    {
      label: 'hey 3',
    },
  ];
  override render() {
    return html` <hy-select .options=${this.options}> </hy-select> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hy-select-demo': SlectDemoElement;
  }
}
