import { Injectable } from '@angular/core';
import { take, takeUntil, tap } from 'rxjs';
import { TransactionView } from '../model';
import { AbstractDataTable } from './abstract-data-table';
import { BlockApiService, LIMIT } from './block-api.service';

@Injectable()
export class BlockDetailService extends AbstractDataTable<TransactionView> {
  constructor(
    private blockApiService: BlockApiService,
  ) {
    super();
  }

  init(level: number): void {
    this.page$.pipe(
      tap(page => {
        this.loadData(level, page);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  loadData(level: number, page: number) {
    this.blockApiService.getDetailInfo$(level, page)
      .pipe(
        take(1)
      )
      .subscribe(list => {
        this.hasNext$.next(list.length === LIMIT)
        this.dateList$.next(list);
    })
  }
}
