import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgAFAutomaticFormsModule} from '../ngaf-automatic-forms.module';
import {NgAFFormsService} from '../common/services/ngaf-forms.service';
import {NgAFFieldItem} from '../common/interfaces/ngaf-field.item';
import {NgAFMaterialInputComponent} from './components/ngaf-material-input.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorStateMatcher, MatCheckboxModule, MatInputModule, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import {NgAFMaterialCheckBoxComponent} from './components/ngaf-material-checkbox.component';

@NgModule({
  declarations: [
    NgAFMaterialInputComponent,
    NgAFMaterialCheckBoxComponent
  ],
  entryComponents: [
    NgAFMaterialInputComponent,
    NgAFMaterialCheckBoxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgAFAutomaticFormsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class NgAFMaterialModule {
  constructor(private ngafFormsService: NgAFFormsService) {
    const fieldMap = new Map<string, NgAFFieldItem>();
    fieldMap.set('number', new NgAFFieldItem(NgAFMaterialInputComponent));
    fieldMap.set('text', new NgAFFieldItem(NgAFMaterialInputComponent));
    fieldMap.set('email', new NgAFFieldItem(NgAFMaterialInputComponent));
    fieldMap.set('password', new NgAFFieldItem(NgAFMaterialInputComponent));
    fieldMap.set('checkbox', new NgAFFieldItem(NgAFMaterialCheckBoxComponent));
    // fieldMap.set('select', new NgAFFieldItem(NgAFNativeSelectComponent));

    this.ngafFormsService.setFieldMap(fieldMap);
  }
}
