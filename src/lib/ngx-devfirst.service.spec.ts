import { TestBed } from '@angular/core/testing';

import { NgxDevfirstService } from './ngx-devfirst.service';

describe('NgxDevfirstService', () => {
  let service: NgxDevfirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDevfirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
