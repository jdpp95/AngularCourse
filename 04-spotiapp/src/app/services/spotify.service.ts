import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) {
    console.log("Spotify service works!");
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDJZ6hf0G4Cpn8rEGQ5kqRU1xQZBmgf4DrHWASCBpZgrbxB3XqGZh_0OVDZfFA74M73gPqd5zYCR3MAuus'
    });

    return this.http.get(url, {headers})
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map(data => {
        return data['albums'].items
      })
    );
  }

  getArtists(query: string) {
    return this.getQuery(`search?q=${query}&type=artist&limit=15`).pipe(
      map(data => {
        return data['artists'].items
      })
    );
  }

  getArtist( id:string ){
    return this.getQuery(`artists/${id}`);
    // .pipe(
    //   map(data => {
    //     return data['artists'].items
    //   })
    // );
  }

  getTopTracks( id:string ){
    //https://api.spotify.com/v1/artists/{id}/top-tracks
    return this.getQuery(`artists/${id}/top-tracks?country=co`).pipe(
      map(data => {
        return data['tracks']
      })
    );
  }
}
