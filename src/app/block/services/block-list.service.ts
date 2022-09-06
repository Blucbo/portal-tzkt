import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, take } from 'rxjs';
import { BlockView } from '../model';
import { BlockApiService } from './block-api.service';

@Injectable()
export class BlockListService {
  private readonly blockList$: ReplaySubject<BlockView[]> = new ReplaySubject(1);
  readonly list$ = this.blockList$.asObservable();
  
  constructor(
    private blockApiService: BlockApiService,
  ) { }


  init() {
    this.blockApiService.getBlockListInfo$()
      .pipe(
        take(1)
      ).subscribe(list => {
        this.blockList$.next(list);
    })

    // this.blockApiService.getTransactionsCount$().subscribe(data => console.log('data', data))
  }

  test() {
    this.blockApiService.getBlockListInfo$().subscribe(data => console.log('data ', data))
  }
}
