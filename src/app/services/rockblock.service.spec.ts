import { TestBed } from '@angular/core/testing';

import { RockblockService } from './rockblock.service';

describe('RockblockService', () => {
  let service: RockblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
