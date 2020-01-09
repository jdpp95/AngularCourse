import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieModel } from 'src/app/models/movie.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movies: MovieModel[];
  title: string;
  optionSelected: number;
  NOW_PLAYING = 1;
  MOST_POPULAR = 2;
  UPCOMING_MOVIES = 3;

  constructor(
    private movieService: MoviesService,
    private router: Router
    ) {

    this.movies = new Array();
    this.onOptionSelected(this.NOW_PLAYING);
  }

  onOptionSelected(option: number) {
    var method: Observable<any>
    this.optionSelected = option;

    switch (this.optionSelected) {
      case this.NOW_PLAYING:
        this.title = "Now playing";
        method = this.movieService.getRecentMovies();
        break;
      case this.MOST_POPULAR:
        this.title = "Most popular movies";
        method = this.movieService.getPopularMovies();
        break;
      case this.UPCOMING_MOVIES:
        this.title = "Upcoming movies";
        method = this.movieService.getUpcomingMovies();
        break;
    }

    method.subscribe(
      data => {
        this.movies = [];
        console.log(data.results)
        data.results.forEach(
          element => {
            let movie = new MovieModel();
            movie.id = element.id;
            movie.title = element.title;
            movie.overview = element.overview;
            movie.posterPath = this.movieService.getPictureUrl(300) + element.poster_path;
            this.movies.push(movie);
          });
      });
  }
}
