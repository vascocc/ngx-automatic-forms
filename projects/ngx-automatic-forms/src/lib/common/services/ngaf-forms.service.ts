import {Component, Injectable, Type} from '@angular/core';
import {NgAFNativeInputComponent} from '../../native/components/ngaf-native-input.component';
import {NgAFNativeSelectComponent} from '../../native/components/ngaf-native-select.component';
import {NgAFFieldItem} from '../interfaces/ngaf-field.item';

@Injectable({
  providedIn: 'root'
})
export class NgAFFormsService {

  private _fieldMap = new Map<string, NgAFFieldItem>();
  private _customFieldMap = new Map<string, NgAFFieldItem>();

  constructor() {}

  initService(type: 'native' | 'ngMaterial') {
    switch (type) {
      case('ngMaterial'):
        break;
      case('native'):
      default:
        this.loadNativeFieldsMap();
        break;
    }
  }

  loadNativeFieldsMap() {
    const fieldMap = new Map<string, NgAFFieldItem>();
    fieldMap.set('number', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('text', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('email', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('password', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('checkbox', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('select', new NgAFFieldItem(NgAFNativeSelectComponent));

    this.setFieldMap(fieldMap);
  }

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
