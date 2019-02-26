/**
 * Created by VascoCC on 2/12/2019.
 */

export interface NgAFFormObject {
  name?: string;
  hasSubmit: boolean;
  hasReset: boolean;
  fields?: Array<NgAFFieldObject>;
  groups?: Array<NgAFGroupObject>;
}

export interface NgAFGroupObject {
  name: string;
  control: string;
  fields?: Array<NgAFFieldObject>;
  groups?: Array<NgAFGroupObject>;
}

export interface NgAFFieldObject {
  name?: string;
  control: string;
  type: string;
  validators?: Array<NgAFValidatorObject>;
  values?: Array<any>;
  value?: any;
  extras?: any;
}

export interface NgAFValidatorObject {
  type: 'min' | 'max' | 'required' | 'maxLength' | 'minLength';
  value?: string | number;
}
