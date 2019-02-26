import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAutomaticFormsComponent } from './ngx-automatic-forms.component';

describe('NgxAutomaticFormsComponent', () => {
  let component: NgxAutomaticFormsComponent;
  let fixture: ComponentFixture<NgxAutomaticFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAutomaticFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAutomaticFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
