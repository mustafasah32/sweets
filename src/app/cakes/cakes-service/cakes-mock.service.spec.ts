import { TestBed } from '@angular/core/testing';

import { CakesMockService } from './cakes-mock.service';

describe('CakesMockService', () => {
  let service: CakesMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakesMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
