import { TestBed } from '@angular/core/testing';

import { NgafFormsService } from './ngaf-forms.service';

describe('NgafFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgafFormsService = TestBed.get(NgafFormsService);
    expect(service).toBeTruthy();
  });
});
