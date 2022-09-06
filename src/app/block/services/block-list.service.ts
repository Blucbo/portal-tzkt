import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, switchMap, take, tap } from 'rxjs';
import { BlockView } from '../model';
import { BlockApiService } from './block-api.service';

@Injectable()
export class BlockListService {
  private readonly blockList$: ReplaySubject<BlockView[]> = new ReplaySubject(1);
  readonly list$ = this.blockList$.asObservable();
  private readonly page$ = new BehaviorSubject(0);
  readonly pageNumber$ = this.page$.asObservable();
  
  constructor(
    private blockApiService: BlockApiService,
  ) { }


  init() {
    this.page$.pipe(
      tap(page => {
        console.log('here')
        this.loadBlocks(page);
      })
    ).subscribe();
  }

  public nextPage(): void {
    console.log('nextPage')

    const nextPage = this.page$.getValue() + 1
    this.page$.next(nextPage)
  }
  
  public previousPage(): void {
    console.log('previousPage')
    
    const previousPage = this.page$.getValue() - 1;
    this.page$.next(previousPage < 0 ? 0 : previousPage)
  }
  
  private loadBlocks(page: number) {
    this.blockApiService.getBlockListInfo$(page)
      .pipe(
        take(1)
      ).subscribe(list => {
        this.blockList$.next(list);
    })
  }

}
