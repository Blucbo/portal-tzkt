import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, forkJoin, from, map, mapTo, mergeMap, Observable, of, toArray, withLatestFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlockView } from '../model';
import { Block } from '../model';


@Injectable()
export class BlockApiService {

  constructor(private http: HttpClient) { }

  // todo: query params
  getBlocks$(): Observable<Block[]> {
    return this.http.get<Block[]>(`${environment.api}v1/blocks?sort.desc=level&limit=10`);
  }

  // rename or move to another service
  getTransactionsCount$(level: number = 1136962): Observable<number> {
    return this.http.get<number>(`${environment.api}v1/operations/transactions/count?level=${level}`);
  }

  getBlockListInfo$(): Observable<BlockView[]> {
    return this.getBlocks$().pipe(
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