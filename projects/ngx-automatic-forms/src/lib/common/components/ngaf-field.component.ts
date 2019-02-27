import {isUndefined} from 'util';
import {FormControl, Validators} from '@angular/forms';
import {NgAFFieldObject} from '../interfaces/ngaf-objects.interface';
import {OnInit} from '@angular/core';

export class NgAFFieldComponent implements OnInit {
  field: NgAFFieldObject;
  formControlObject: FormControl;


  ngOnInit() {
    if (!isUndefined(this.field.validators) && this.field.validators.length > 0) {
      this.formControlObject.setValidators(this.getValidators(this.field));
    }
  }

  hasValidatorType(type): boolean {
    return this.field.validators.filter(validator => validator.type === type).length > 0;
  }

  getValidatorTypeValue(type): any {
    return this.field.validators.filter(validator => validator.type === type)[0].value;
  }

  getValidators(field): any {

    let validators = null;

    field.validators.forEach(validator => {
      switch (validator.type) {
        case('required'):
          if (validators === null) {
            validators = Validators.required;
          } else {
            validators = Validators.compose([validators, Validators.required]);
          }
          break;
        case('max'):
          if (validators === null) {
            validators = Validators.max(validator.value);
          } else {
            validators = Validators.compose([validators, Validators.max(validator.value)]);
          }
          break;
        case('min'):
          if (validators === null) {
            validators = Validators.min(validator.value);
          } else {
            validators = Validators.compose([validators, Validators.min(validator.value)]);
          }
          break;
        case('maxLength'):
          if (validators === null) {
            validators = Validators.maxLength(validator.value);
          } else {
            validators = Validators.compose([validators, Validators.maxLength(validator.value)]);
          }
          break;
        case('minLength'):
          if (validators === null) {
            validators = Validators.minLength(validator.value);
          } else {
            validators = Validators.compose([validators, Validators.minLength(validator.value)]);
          }
          break;
      }
    });

    return validators;
  }

  changedSelectValue(event) {
    this.formControlObject.setValue(event.value);
  }

  /**
   * Validates field, if invalid sets default value.
   *
   * @param form
   * @param control
   * @param defaultValue
   */
  checkValidation() {
    if (!this.formControlObject.valid) {
      this.formControlObject.setValue(this.field.value ? this.field.value : null);
    }

  }
}
