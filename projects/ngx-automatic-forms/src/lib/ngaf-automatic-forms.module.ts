import {NgModule} from '@angular/core';
import {NgafFormComponent} from './common/components/ngaf-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgAFFormGroupComponent} from './common/components/ngaf-form-group.component';
import {NgAFDynamicFieldDirective} from './common/directives/ngaf-dynamic-field.directive';
import {NgAFFormsService} from './common/services/ngaf-forms.service';
import {NgAFFormFieldComponent} from './common/components/ngaf-form-field.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NgafFormComponent,
    NgAFFormGroupComponent,
    NgAFDynamicFieldDirective,
    NgAFFormFieldComponent
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
