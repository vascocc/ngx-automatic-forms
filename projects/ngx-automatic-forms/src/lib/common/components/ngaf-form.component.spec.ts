import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgafFormComponent } from './ngaf-form.component';

describe('NgafFormComponent', () => {
  let component: NgafFormComponent;
  let fixture: ComponentFixture<NgafFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgafFormComponent ]
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
