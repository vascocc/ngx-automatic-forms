import {AfterViewInit, ChangeDetectorRef, Component, Inject, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {NgAFFormObject, NgAFFormOptionsObject} from '../interfaces/ngaf-objects.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgAFFormGroupComponent} from './ngaf-form-group.component';
import {NgAFFormFieldComponent} from './ngaf-form-field.component';
import {NgAFFormsService} from '../services/ngaf-forms.service';

@Component({
  selector: 'ngaf-form',
  templateUrl: './ngaf-form.component.html'
})
export class NgafFormComponent implements OnInit, AfterViewInit {

  @Input() form: NgAFFormObject;
  @Input() options: NgAFFormOptionsObject;
  @ViewChildren(NgAFFormFieldComponent) fields: QueryList<NgAFFormFieldComponent>;
  @ViewChildren(NgAFFormGroupComponent) groups: QueryList<NgAFFormGroupComponent>;

  formBuilder: FormBuilder;
  formGroup: FormGroup;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder, private cd: ChangeDetectorRef, private ngAFFormsService: NgAFFormsService) {
    this.formBuilder = formBuilder;
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.ngAFFormsService.initService(this.options.lokkAndFeel);
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  reset() {
    // this.fields.forEach(field => field.reset());
    this.groups.forEach(group => group.reset());
  }

  submit(formGroup: FormGroup) {
    console.log(formGroup.value);
  }

}
