import {Injectable} from '@angular/core';
import {NgAFFieldItem} from '../interfaces/ngaf-field.item';

@Injectable({
  providedIn: 'root'
})
export class NgAFFormsService {

  private _fieldMap = new Map<string, NgAFFieldItem>();
  private _customFieldMap = new Map<string, NgAFFieldItem>();

  constructor() {}

  getFieldMap(): Map<string, NgAFFieldItem> {
    return this._fieldMap;
  }

  setFieldMap(fieldMap: Map<string, NgAFFieldItem>) {
    this._fieldMap = fieldMap;
  }

  getCustomFieldMap(): Map<string, NgAFFieldItem> {
    return this._customFieldMap;
  }

  setCustomFields(customFieldMap: Map<string, NgAFFieldItem>) {
    this._customFieldMap = customFieldMap;
  }
}
