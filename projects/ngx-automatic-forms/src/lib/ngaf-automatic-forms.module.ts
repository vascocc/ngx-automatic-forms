import { NgModule } from '@angular/core';
import { NgafFormComponent } from './common/components/ngaf-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgAFFormGroupComponent} from './common/components/ngaf-form-group.component';
import {NgAFDynamicFieldDirective} from './common/directives/ngaf-dynamic-field.directive';
import {NgAFFormsService} from './common/services/ngaf-forms.service';
import {NgAFFormFieldComponent} from './common/components/ngaf-form-field.component';
import {CommonModule} from '@angular/common';
import {NgAFNativeInputComponent} from './native/components/ngaf-native-input.component';
import {NgAFNativeSelectComponent} from './native/components/ngaf-native-select.component';

@NgModule({
  declarations: [
    NgafFormComponent,
    NgAFFormGroupComponent,
    NgAFDynamicFieldDirective,
    NgAFFormFieldComponent,
    NgAFNativeInputComponent,
    NgAFNativeSelectComponent
  ],
  entryComponents: [
    NgAFNativeInputComponent,
    NgAFNativeSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    NgAFDynamicFieldDirective,
    NgAFFormsService
  ],
  exports: [
    NgafFormComponent
  ]
})
export class NgAFAutomaticFormsModule { }
