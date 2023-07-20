import {createComponent} from 'npm:@lit-labs/react@1.1.1';
import React from "https://dev.jspm.io/react@18.2.0";;
import {TabsComponent} from './tabs.component.ts';
export const HyTabsComponent = createComponent({
  tagName: 'hy-tabs',
  elementClass: TabsComponent,
  react: React,
  events: {
    removeTab: 'removeTab',
    tabEdited: 'tabEdited',
    tabTilteClick: 'tabTilteClick',
    tabOrderChange: 'tabOrderChange',
    addTab: 'addTab',
  },
});
