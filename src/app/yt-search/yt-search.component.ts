import { Component, OnInit, OnDestroy } from '@angular/core';
import { YtSearchService } from './yt-search.service';
import { Observable, Subscription } from 'rxjs';
import { Playlist, Item } from './playlist.model';

@Component({
  selector: 'yt-search',
  templateUrl: './yt-search.component.html',
  styleUrls: ['./yt-search.component.scss'],
})
export class YtSearchComponent implements OnInit, OnDestroy {
  playlists$: Observable<Playlist[]>;
  playlistsSub: Subscription;
  // youtube playlists
  playlists: Playlist[];
  playListsCount = 0;
  // loaded playlists
  playlistsLoaded: Playlist[] = [];
  pageListsLoadedCount = 0;

  pageLoadedCount = 0;
  nextPage = '';

  constructor(private svc: YtSearchService) {
    this.loadPlaylists();
  }
  loadPlaylists(pageToken = '') {
    // this.playlists$ = this.svc.getPlaylistForChanel();
    this.playlistsSub = this.svc
      .getPlaylistForChanel(this.nextPage)
      .subscribe((pls) => {
        this.nextPage = pls['nextPageToken'];
        this.playListsCount = parseInt(pls['pageInfo']['totalResults'], 10);
        this.playlistsLoaded = this.playlistsLoaded.concat(pls);
        this.pageListsLoadedCount = this.playlistsLoaded.length;
        this.pageListsLoadedCount += 1;
        this.playlists = pls;
      });
  }
  getNextPage() {
    this.loadPlaylists(this.nextPage);
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.playlistsSub.unsubscribe();
  }
}
