import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any[] = [];
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private activatedRoute:ActivatedRoute,
    private spotify:SpotifyService
  ) { 
    
    this.activatedRoute.params.subscribe(
      params => {
        this.loading = true;
        this.getArtist(params['id']);
        this.getTopTracks(params['id']);
      }
    );
  }

  getArtist(id:string){
    this.loading = true;
    this.spotify.getArtist(id).subscribe(
      (data:any) => {
        this.artist = data;
        this.loading = false;
      }
    );
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(
      topTracks => {
        this.topTracks = topTracks;
        console.log(topTracks);
      }
    )
    
  }
}
