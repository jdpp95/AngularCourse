import { Injectable } from '@angular/core';
//import { Http, Jsonp } from '@angular/common/http';
import { map } from 'rxjs/operators'; //Map
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  private apikey: string = "";
  private URLMovieDB: string = "https://api.themoviedb.org/3";

  constructor(
    private http: HttpClient,
  ) { }

  getPopularMovies(){
    let url = `${ this.URLMovieDB }/movie/popular?api_key=${this.apikey}`;
    return this.http.get(url).pipe(map( (response: any) => response));
  }

  getRecentMovies(){
    let url = `${ this.URLMovieDB }/movie/now_playing?api_key=${this.apikey}`
    return this.http.get(url).pipe(map( (response: any) => response));
  }

  getUpcomingMovies(){
    let url = `${ this.URLMovieDB }/movie/upcoming?api_key=${this.apikey}`
    return this.http.get(url).pipe(map( (response: any) => response));
  }

  searchMovie(text:string){
    let url = `${this.URLMovieDB}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apikey}`
    return this.http.get(url).pipe(map( (response: any) => response));
  }

  getPictureUrl(size: number)
  {
    return "https://image.tmdb.org/t/p/w" + size;
  }

  getMovieById(id: string) {
    let url = `${this.URLMovieDB}/movie/${id}?api_key=${this.apikey}`
    return this.http.get(url).pipe(map( (response: any) => response));
  }

  getMovies(query: string) {
    let url = `${this.URLMovieDB}/search/movie?api_key=${this.apikey}&query=${query}`
    return this.http.get(url).pipe(map( (response: any) => response));
  }
}
