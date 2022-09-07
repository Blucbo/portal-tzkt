import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes =[
  { 
    path: '', 
    redirectTo: 'block', 
    pathMatch: 'full' 
  },
  { 
    path: 'block',
    loadChildren: () => import('./block/block.module').then(m => m.BlockModule)
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
