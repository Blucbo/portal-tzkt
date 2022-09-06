import { Component, OnInit } from '@angular/core';
import { BlockListService } from '../../services/block-list.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {

  blockList$ = this.blockListService.list$;

  constructor(
    private blockListService: BlockListService,
  ) { }

  ngOnInit(): void {
    this.blockListService.init()
  }

}