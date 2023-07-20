import {TemplateResult} from 'npm:lit@2.6.1';

export type RadioOption = {
  value: string;
  label: string;
  tempale?: TemplateResult<1>;
  id?: string | number;
};

export enum RadioButtonType {
  Default = 'default',
  Button = 'button',
}
