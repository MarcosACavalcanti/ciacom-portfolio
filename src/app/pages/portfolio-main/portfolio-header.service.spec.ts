import { TestBed } from '@angular/core/testing';

import { PortfolioHeaderService } from './portfolio-header.service';

describe('PortfolioHeaderService', () => {
  let service: PortfolioHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
