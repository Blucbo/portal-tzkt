import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockDetailComponent } from './pages/block-detail/block-detail.component';
import { BlockListComponent } from './pages/block-list/block-list.component';

const routes: Routes = [
  {
    path: '',
    component: BlockListComponent,
  },
  {
    path: ':level/detail',
    component: BlockDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockRoutingModule { }
