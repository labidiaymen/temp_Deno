import {createComponent} from 'npm:@lit-labs/react@1.1.1';
import React from "https://dev.jspm.io/react@18.2.0";;
import {HyMenuComponent} from './menu.component.ts';
export const HyDropdown = createComponent({
  tagName: 'hy-menu',
  elementClass: HyMenuComponent,
  react: React,
  events: {},
});
