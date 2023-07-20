import {createComponent} from 'npm:@lit-labs/react@1.1.1';
import React from "https://dev.jspm.io/react@18.2.0";;
import {HyButtonElement} from './hy-button.component.ts';
export const HyButton = createComponent({
  tagName: 'hy-button',
  elementClass: HyButtonElement,
  react: React,
  events: {
    click: 'click',
  },
});
