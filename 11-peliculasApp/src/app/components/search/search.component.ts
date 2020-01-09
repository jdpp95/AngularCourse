import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: MovieModel[]

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
  }

  search(query: string) {
    //this.loading = true;
    this.movies = []
    this.movieService.getMovies(query).subscribe(
      data => {
        //this.loading = false
        data.results.forEach(
          element => {
            let movie = new MovieModel();
            movie.id = element.id;
            movie.title = element.title;
            movie.overview = element.overview;
            movie.posterPath = this.movieService.getPictureUrl(300) + element.poster_path;
            this.movies.push(movie);
          });
      }
    );
  }

}
