import { Component } from '@angular/core';
import { BlockListService } from '../../services/block-list.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent {

  readonly blockList$ = this.blockListService.vmList$;
  readonly pageNumber$ = this.blockListService.pageNumber$;
  readonly hasNextPage$ = this.blockListService.hasNextPage$;
  
  constructor(
    private blockListService: BlockListService,
  ) { }

  nextPage() {
    this.blockListService.nextPage();
  }

  previousPage() {
    this.blockListService.previousPage();
  }

}