/* eslint-disable @typescript-eslint/no-explicit-any */
import {html, TemplateResult} from 'npm:lit@2.6.1';
import {EMPTY_STRING, INVALID_DAY_CLASS_NAME} from '../constants.ts';
import {todayIsTheDay} from '../core/day.helper.ts';
import {capitalizeFirstLetter} from '../core/string.helper.ts';

interface DateRawObject {
  curentYear: number;
  currentMonth: number;
  currentDay: number;
}

export const renderDays = (
  weekdaysShort: string[],
  daysPresentation: any[],
  navigationDates: any,
  selectDay: (date: string) => void,
  dateRawObject: DateRawObject
): TemplateResult => {
  const dayHeaderItem = (shortDay: string) =>
    html`<div class="day-header-item">${capitalizeFirstLetter(shortDay)}</div>`;
  const dayContainer = (day: any) => {
    const active =
      todayIsTheDay(navigationDates, day.date, dateRawObject) &&
      day.valid &&
      day.month === dateRawObject.currentMonth - 1;
    const valid = day.valid ? EMPTY_STRING : INVALID_DAY_CLASS_NAME;

    return html`<div
      class="day-container ${active ? 'day-active' : EMPTY_STRING} ${valid}"
      @click=${() => selectDay(day.date)}
    >
      ${day.date}
    </div>`;
  };

  return html`<div class="days-container">
    ${weekdaysShort.map(dayHeaderItem)} ${daysPresentation?.map(dayContainer)}
  </div>`;
};
