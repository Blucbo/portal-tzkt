import { Injectable } from '@angular/core';
import { take, takeUntil, tap } from 'rxjs';
import { BlockView } from '../model';
import { AbstractDataTable } from './abstract-data-table';
import { BlockApiService, LIMIT } from './block-api.service';

@Injectable()
export class BlockListService extends AbstractDataTable<BlockView>  {
  constructor(
    private blockApiService: BlockApiService,
  ) {
    super();
    this.init();
  }

  init(): void {
    this.page$.pipe(
      tap(page => {
        this.loadData(page);
      }),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  loadData(page: number): void {
    this.blockApiService.getBlockListInfo$(page)
      .pipe(
        take(1)
      )
      .subscribe(list => {
        this.hasNext$.next(list.length === LIMIT)
        this.dateList$.next(list);
    })
  }

}
