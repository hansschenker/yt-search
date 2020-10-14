import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Playlist } from './playlist.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlaylistItem } from './playlist-item';

@Injectable({
  providedIn: 'root',
})
export class YtSearchService {
  apiKey = 'AIzaSyAZ2o2puH8Ue2BwoEvOqNwHChXzOAAD1WI';
  channel = 'UCYlW9EuQnlNRtEYqVtpfbDw';
  maxResults = 50;
  constructor(private http: HttpClient) {}

  getPlaylistItemsForPlaylist(
    playlist,
    maxResults
  ): Observable<PlaylistItem[]> {
    const url =
      'https://www.googleapis.com/youtube/v3/search?key=' +
      this.apiKey +
      '&playlistId=' +
      playlist +
      '&order=date&part=snippet &type=video,id&maxResults=' +
      maxResults;
    return this.http.get<PlaylistItem[]>(url).pipe(
      map((res) => {
        return res;
      })
    );
  } // VideosForChannel
  getPlaylistForChanel(nextPage: string): Observable<Playlist[]> {
    const url =
      'https://www.googleapis.com/youtube/v3/search?key=' +
      this.apiKey +
      '&channelId=' +
      this.channel +
      '&order=date&part=snippet &type=playlist,id&maxResults=' +
      this.maxResults +
      '&pageToken=' +
      nextPage;
    return this.http.get<Playlist[]>(url).pipe(
      map((res) => {
        return res;
      })
    );
  }
  getNextPlaylistsPage(pageToke: string) {}
} // class
