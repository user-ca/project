import { TestBed } from '@angular/core/testing';

import { WaitTimeService } from './wait-time.service';

describe('WaitTimeService', () => {
  let service: WaitTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
