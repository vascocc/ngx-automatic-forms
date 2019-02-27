import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgAFFieldObject} from '../interfaces/ngaf-objects.interface';
import {NgAFFormsService} from '../services/ngaf-forms.service';
import {NgAFFieldComponent} from './ngaf-field.component';
import {NgAFDynamicFieldDirective} from '../directives/ngaf-dynamic-field.directive';
import {NgAFNativeInputComponent} from '../../native/components/ngaf-native-input.component';
import {NgAFFieldItem} from '../interfaces/ngaf-field.item';

@Component({
  selector: 'ngaf-form-field',
  templateUrl: './ngaf-form-field.component.html'
})
export class NgAFFormFieldComponent implements OnInit {

  @Input() field: NgAFFieldObject;
  @Input() formGroup: FormGroup;

  @ViewChild(NgAFDynamicFieldDirective) ngAFDynamicField;
  defaultValue: any;

  constructor(private ngafFormsService: NgAFFormsService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {

    switch (this.field.type) {
      case('number'):
        this.defaultValue = 0;
        break;
      case('text'):
      case('email'):
      case('password'):
        this.defaultValue = '';
        break;
      case('toggle'):
      case('checkbox'):
        this.defaultValue = false;
        break;
      case('select'):
        this.defaultValue = null;
        break;
      default:
        break;
    }

    this.formGroup.addControl(this.field.control, new FormControl(this.field.value ? this.field.value : this.defaultValue));

    const customField = this.ngafFormsService.getCustomFieldMap().get(this.field.type);
    if (customField) {
      this.loadComponent(customField);
    } else {
      const nativeField = this.ngafFormsService.getFieldMap().get(this.field.type);
      this.loadComponent(nativeField);
    }
  }

  loadComponent(field) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(field.component);

    const viewContainerRef = this.ngAFDynamicField.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<NgAFFieldComponent> componentRef.instance).field = this.field;
    (<NgAFFieldComponent> componentRef.instance).formControlObject = <FormControl> this.formGroup.controls[this.field.control];
  }

  reset() {
    this.formGroup.controls[this.field.control].setValue(this.field.value ? this.field.value : this.defaultValue);
  }
}
