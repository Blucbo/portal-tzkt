import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockListComponent } from './pages/block-list/block-list.component';

const routes: Routes = [
  {
    path: '',
    component: BlockListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockRoutingModule { }
