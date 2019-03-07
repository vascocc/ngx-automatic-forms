/**
 * Created by VascoCC on 2/26/2019.
 */
import {Component, Inject, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgAFGroupObject} from '../interfaces/ngaf-objects.interface';
import {NgAFFormFieldComponent} from './ngaf-form-field.component';

@Component({
  selector: 'ngaf-form-group',
  templateUrl: './ngaf-form-group.component.html'
})
export class NgAFFormGroupComponent implements OnInit {

  @Input() group: NgAFGroupObject;
  @Input() form: FormGroup;


  @ViewChildren(NgAFFormFieldComponent) fields: QueryList<NgAFFormFieldComponent>;
  @ViewChildren(NgAFFormGroupComponent) groups: QueryList<NgAFFormGroupComponent>;

  formBuilder: FormBuilder;
  formGroup: FormGroup;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit() {
    this.form.addControl(this.group.control, this.formGroup);
  }

  reset() {
    this.fields.forEach(field => field.reset());
    this.groups.forEach(group => group.reset());
  }
}
