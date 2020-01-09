import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  countries: any[] = [];
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(
    private spotify: SpotifyService
  ) { 
    this.error = false;
  }

  ngOnInit() {
    this.loading = true
    this.spotify.getNewReleases().subscribe(
      data => {
        this.newSongs = data
        this.loading = false;
      }, 

      errorInService => {
        this.error = true;
        this.loading = false;
        this.errorMessage = errorInService.error.error.message;
      }
    );
  }

}
