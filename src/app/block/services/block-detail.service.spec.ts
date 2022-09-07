import { TestBed } from '@angular/core/testing';

import { BlockDetailService } from './block-detail.service';

describe('BlockDetailService', () => {
  let service: BlockDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
