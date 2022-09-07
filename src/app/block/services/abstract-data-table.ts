import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

export abstract class AbstractDataTable<T> {
  protected readonly dateList$: ReplaySubject<T[]> = new ReplaySubject(1);
  readonly vmList$ = this.dateList$.asObservable();

  protected readonly page$ = new BehaviorSubject(0);
  readonly pageNumber$ = this.page$.asObservable();
  
  protected readonly hasNext$ = new BehaviorSubject(true);
  readonly hasNextPage$ = this.hasNext$.asObservable();
  
  protected destroy$ = new Subject<void>();

  abstract init(...args: any[]): void
  
  destroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  abstract loadData(...args: any[]): void  

  public nextPage(): void {
    const nextPage = this.page$.getValue() + 1
    this.page$.next(nextPage)
  }
  
  public previousPage(): void {
    const previousPage = this.page$.getValue() - 1;
    this.page$.next(previousPage < 0 ? 0 : previousPage)
  }

}