import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAutomaticFormComponent } from './ngx-automatic-form.component';

describe('NgxAutomaticFormComponent', () => {
  let component: NgxAutomaticFormComponent;
  let fixture: ComponentFixture<NgxAutomaticFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAutomaticFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAutomaticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
