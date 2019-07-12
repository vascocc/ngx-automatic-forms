import {Component, Type} from '@angular/core';
import {NgAFFormObject} from '../../projects/ngx-automatic-forms/src/lib/common/interfaces/ngaf-objects.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectValues = ['1', '2', '3'];

  options = {
  };

  formObject: NgAFFormObject = {
    name: 'Test Form',
    hasSubmit: true,
    hasReset: true,
    fields: [
      {
        name: 'Number',
        control: 'first_field_root',
        type: 'number',
        value: 99,
        hint: 'Between 0 and 100',
        validators: [
          {
            type: 'required',
            error: 'Do it'
          },
          {
            type: 'max',
            value: 100,
            error: 'Must be less than 100'
          },
          {
            type: 'min',
            value: 0,
            error: 'Must be more than 0'
          }
        ]
      },
      {
        name: 'Text (required)',
        control: 'second_field_root',
        type: 'text',
        validators: [
          {
            type: 'required',
            error: 'Must provide <strong>this field</strong>'
          }
        ]
      },
      {
        name: 'This is a checkbox',
        control: 'root_checkbox',
        hint: 'Check this hint',
        type: 'checkbox'
      },
      {
        name: 'Email',
        control: 'email_field',
        type: 'email',
        validators: [
          {
            type: 'required',
            error: 'Must provide <strong>this field</strong>'
          },
          {
            type: 'email',
            error: 'Must provide a <strong>valid</strong> email address'
          }
        ]
      },
      {
        name: 'Password',
        control: 'pass_field',
        type: 'password',
        validators: [
          {
            type: 'required',
            error: 'Must provide <strong>this field</strong>'
          },
          {
            type: 'pattern',
            value: '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}',
            error: 'Must provide a password with at least one number, one uppercase character, one lowercase character, ' +
              'one special character, with length between 8 and 16 characters'
          }
        ]
      }
    ],
    groups: [
      {
        name: 'Group 1',
        control: 'group_1',
        fields: [
          {
            name: 'Number (0-100)',
            control: 'first_field_first_group',
            type: 'number',
            validators: [
              {
                type: 'required'
              },
              {
                type: 'max',
                value: 100
              },
              {
                type: 'min',
                value: 0
              }
            ]
          },
          {
            name: 'Text (required,  3 - 6)',
            control: 'second_field_root',
            type: 'text',
            validators: [
              {
                type: 'required'
              },
              {
                type: 'maxLength',
                value: 6
              },
              {
                type: 'minLength',
                value: 3
              }
            ]
          }
        ]/*,
        groups: [
          {
            name: 'Group 1.1',
            control: 'group_1_1',
            fields: [
              {
                name: 'Toggle',
                control: 'toggle_1_1',
                type: 'checkbox'
              },
              {
                name: 'Single Select',
                control: 'single_select_1_1',
                type: 'select',
                value: 3,
                values: this.selectValues,
                extras: {
                  options: {multiple: false},
                  startEmpty: true
                }
              },
              {
                name: 'Multi Select',
                control: 'multi_select_1_1',
                type: 'select',
                value: [ '1', '3'],
                values: this.selectValues,
                extras: {
                  options: {multiple: true},
                  startEmpty: false
                }
              }
            ]
          }
        ]*/
      }
    ]
  };

  constructor() {
  }
}
