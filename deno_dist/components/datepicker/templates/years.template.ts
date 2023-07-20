import {html} from 'npm:lit@2.6.1';
import {EMPTY_STRING} from '../constants.ts';

interface ClickHandler {
  (year: number): void;
}

export const renderYearsTemplate = (currentYear: number, clickHandler: ClickHandler) => {
  const yearRange = Array.from({length: 12}, (_v, i) => i + (currentYear - 6));

  const yearContainer = (year: number) => {
    const active = currentYear === year ? 'year-active' : EMPTY_STRING;

    return html` <div class="year-container ${active}" @click=${() => clickHandler(year)}>${year}</div> `;
  };

  return html` <div class="years-container">${yearRange.map(yearContainer)}</div> `;
};
