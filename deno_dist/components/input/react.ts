import {createComponent} from 'npm:@lit-labs/react@1.1.1';
import React from "https://dev.jspm.io/react@18.2.0";;
import {HyInputElement} from './input.component.ts';
export const HyInput = createComponent({
  tagName: 'hy-input',
  elementClass: HyInputElement,
  react: React,
  events: {
    valueChange: 'valueChange',
  },
});
