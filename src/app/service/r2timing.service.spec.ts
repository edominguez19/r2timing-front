import { TestBed } from '@angular/core/testing';

import { R2timingService } from './r2timing.service';

describe('R2timingService', () => {
  let service: R2timingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(R2timingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
