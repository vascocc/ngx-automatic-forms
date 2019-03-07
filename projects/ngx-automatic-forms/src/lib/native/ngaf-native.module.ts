import {NgModule} from '@angular/core';
import {NgAFNativeInputComponent} from './components/ngaf-native-input.component';
import {NgAFNativeSelectComponent} from './components/ngaf-native-select.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgAFAutomaticFormsModule} from '../ngaf-automatic-forms.module';
import {NgAFFormsService} from '../common/services/ngaf-forms.service';
import {NgAFFieldItem} from '../common/interfaces/ngaf-field.item';

@NgModule({
  declarations: [
    NgAFNativeInputComponent,
    NgAFNativeSelectComponent
  ],
  entryComponents: [
    NgAFNativeInputComponent,
    NgAFNativeSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgAFAutomaticFormsModule
  ]
})
export class NgAFNativeModule {
  constructor(private ngafFormsService: NgAFFormsService) {
    const fieldMap = new Map<string, NgAFFieldItem>();
    fieldMap.set('number', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('text', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('email', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('password', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('checkbox', new NgAFFieldItem(NgAFNativeInputComponent));
    fieldMap.set('select', new NgAFFieldItem(NgAFNativeSelectComponent));

    this.ngafFormsService.setFieldMap(fieldMap);
  }
}
