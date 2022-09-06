import { TestBed } from '@angular/core/testing';

import { BlockListService } from './block-list.service';

describe('BlockListService', () => {
  let service: BlockListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
