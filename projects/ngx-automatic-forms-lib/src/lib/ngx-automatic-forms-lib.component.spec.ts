import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAutomaticFormsLibComponent } from './ngx-automatic-forms-lib.component';

describe('NgxAutomaticFormsLibComponent', () => {
  let component: NgxAutomaticFormsLibComponent;
  let fixture: ComponentFixture<NgxAutomaticFormsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAutomaticFormsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAutomaticFormsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
