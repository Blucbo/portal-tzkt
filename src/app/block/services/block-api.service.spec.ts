import { TestBed } from '@angular/core/testing';

import { BlockApiService } from './block-api.service';

describe('BlockApiService', () => {
  let service: BlockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
