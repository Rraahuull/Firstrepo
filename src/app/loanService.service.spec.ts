import { TestBed } from '@angular/core/testing';

import { LoanServiceService } from './loanService.service';

describe('LoanServiceService', () => {
  let service: LoanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
