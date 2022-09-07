import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockDetailService } from '../../services/block-detail.service';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.scss']
})
export class BlockDetailComponent implements OnDestroy {

  readonly list$ = this.blockDetailService.vmList$;
  readonly pageNumber$ = this.blockDetailService.pageNumber$;
  readonly hasNextPage$ = this.blockDetailService.hasNextPage$;

  constructor(
    private route: ActivatedRoute,
    private blockDetailService: BlockDetailService,
  ) {
    const level = Number(this.route.snapshot.paramMap.get('level'));
    this.blockDetailService.init(level);
  }
  
  ngOnDestroy(): void {
    this.blockDetailService.destroy();
  }

  nextPage() {
    this.blockDetailService.nextPage();
  }

  previousPage() {
    this.blockDetailService.previousPage();
  }

}
