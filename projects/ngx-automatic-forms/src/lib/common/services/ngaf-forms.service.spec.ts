import { TestBed } from '@angular/core/testing';

import { NgAFFormsService } from './ngaf-forms.service';

describe('NgafFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgAFFormsService = TestBed.get(NgAFFormsService);
    expect(service).toBeTruthy();
  });
});
