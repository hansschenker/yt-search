import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YtSearchComponent } from './yt-search.component';

const routes: Routes = [{ path: '', component: YtSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YtSearchRoutingModule { }
