import { TestBed } from '@angular/core/testing';

import { NgxAutomaticFormsService } from './ngx-automatic-forms.service';

describe('NgxAutomaticFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAutomaticFormsService = TestBed.get(NgxAutomaticFormsService);
    expect(service).toBeTruthy();
  });
});
