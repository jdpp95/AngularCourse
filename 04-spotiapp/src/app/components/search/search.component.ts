import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artists: any[] = []
  loading: boolean;

  constructor(
    private spotify : SpotifyService
  ) { }

  search(query: string) {
    this.loading = true;
    this.spotify.getArtists(query).subscribe(
      data => {
        this.artists = data
        this.loading = false
      }
    );
  }

}
