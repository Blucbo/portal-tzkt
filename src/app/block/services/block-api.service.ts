import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, forkJoin, from, map, Observable, of, toArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlockView, TransactionView } from '../model';
import { Block } from '../model';

export const LIMIT = 10;
@Injectable()
export class BlockApiService {

  constructor(private http: HttpClient) { }

  getBlocks$(page: number): Observable<Block[]> {
    return this.http.get<Block[]>(`${environment.api}v1/blocks?sort.desc=level&limit=${LIMIT}&offset.pg=${page}`);
  }

  getTransactionsCount$(level: number): Observable<number> {
    return this.http.get<number>(`${environment.api}v1/operations/transactions/count?level=${level}`);
  }

  getDetailInfo$(level: number, page = 0): Observable<TransactionView[]> {
    return this.http.get<TransactionView[]>(`${environment.api}v1/operations/transactions?level=${level}&limit=${LIMIT}&offset.pg=${page}`);
  }

  getBlockListInfo$(page: number): Observable<BlockView[]> {
    return this.getBlocks$(page).pipe(
      concatMap((list: Block[]) => from(list)),
      concatMap(block => forkJoin([
          of(block),
          this.getTransactionsCount$(block.level),
        ])
      ),
      map(([blockData, transactionsCount]) => ({
        level: blockData.level,
        proposer: blockData.proposer,
        timestamp: blockData.timestamp,
        numberTransactions: transactionsCount,
      } as BlockView)),
      toArray(),
    );
  }

}
