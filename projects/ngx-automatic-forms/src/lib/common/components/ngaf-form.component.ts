import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {NgAFFormObject, NgAFFormOptionsObject} from '../interfaces/ngaf-objects.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgAFFormGroupComponent} from './ngaf-form-group.component';
import {NgAFFormFieldComponent} from './ngaf-form-field.component';

@Component({
  selector: 'ngaf-form',
  templateUrl: './ngaf-form.component.html'
})
export class NgafFormComponent implements AfterViewInit {

  @Input() form: NgAFFormObject;
  @Input() options: NgAFFormOptionsObject;
  @Output() submission = new EventEmitter();
  @ViewChildren(NgAFFormFieldComponent) fields: QueryList<NgAFFormFieldComponent>;
  @ViewChildren(NgAFFormGroupComponent) groups: QueryList<NgAFFormGroupComponent>;

  formBuilder: FormBuilder;
  formGroup: FormGroup;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder, private cd: ChangeDetectorRef) {
    this.formBuilder = formBuilder;
    this.formGroup = this.formBuilder.group({});
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  reset() {
    this.fields.forEach(field => field.reset());
    this.groups.forEach(group => group.reset());
  }

  submit(formGroup: FormGroup) {
    console.log(formGroup.value);
    this.submission.emit(formGroup.value);
  }
}
