import {Component, Type} from '@angular/core';
import {NgAFFormObject} from '../../projects/ngx-automatic-forms/src/lib/common/interfaces/ngaf-objects.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectValues = [{id: '1', text: '1'}, {id: '2', text: '2'}, {id: '3', text: '3'}];

  options = {
    lookAndFeel: 'native'
  };

  formObject: NgAFFormObject = {
    name: 'Test Form',
    hasSubmit: true,
    hasReset: true,
    fields: [
      {
        name: 'Number (0-100)',
        control: 'first_field_root',
        type: 'number',
        value: 99,
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
        name: 'Text (required)',
        control: 'second_field_root',
        type: 'text',
        validators: [
          {
            type: 'required'
          }
        ]
      }
    ]
  };

  constructor() {
  }
}
