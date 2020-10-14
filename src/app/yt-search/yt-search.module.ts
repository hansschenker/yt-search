import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { YtSearchRoutingModule } from './yt-search-routing.module';
import { YtSearchComponent } from './yt-search.component';

@NgModule({
  declarations: [YtSearchComponent],
  exports: [YtSearchComponent],
  imports: [CommonModule, HttpClientModule, YtSearchRoutingModule],
})
export class YtSearchModule {}
