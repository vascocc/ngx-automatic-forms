import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgafFormComponent } from './ngaf-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgAFFormGroupComponent} from './ngaf-form-group.component';
import {NgAFDynamicFieldDirective} from '../directives/ngaf-dynamic-field.directive';
import {NgAFFormFieldComponent} from './ngaf-form-field.component';

describe('NgafFormComponent', () => {
  let component: NgafFormComponent;
  let fixture: ComponentFixture<NgafFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgafFormComponent,
        NgAFFormGroupComponent,
        NgAFDynamicFieldDirective,
        NgAFFormFieldComponent
      ],
      providers: [
        NgAFDynamicFieldDirective
      ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgafFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
