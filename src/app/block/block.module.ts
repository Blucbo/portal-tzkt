import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlockRoutingModule } from './block-routing.module';
import { BlockListComponent } from './pages/block-list/block-list.component';
import { BlockApiService } from './services/block-api.service';
import { BlockListService } from './services/block-list.service';


@NgModule({
  declarations: [
    BlockListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BlockRoutingModule,
  ],
  providers: [
    BlockApiService,
    BlockListService,
  ]
})
export class BlockModule { }
