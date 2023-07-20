import {createComponent} from 'npm:@lit-labs/react@1.1.1';
import React from "https://dev.jspm.io/react@18.2.0";;
import {ModalComponent} from './modal.component.ts';
export const HyInput = createComponent({
  tagName: 'hy-modal',
  elementClass: ModalComponent,
  react: React,
  events: {
    //valueChange: 'valueChange',
  },
});
