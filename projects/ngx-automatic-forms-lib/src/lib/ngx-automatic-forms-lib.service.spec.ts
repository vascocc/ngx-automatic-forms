import { TestBed } from '@angular/core/testing';

import { NgxAutomaticFormsLibService } from './ngx-automatic-forms-lib.service';

describe('NgxAutomaticFormsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAutomaticFormsLibService = TestBed.get(NgxAutomaticFormsLibService);
    expect(service).toBeTruthy();
  });
});
