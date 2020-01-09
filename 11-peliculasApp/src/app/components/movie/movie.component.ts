import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: MovieModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
    ) {
      this.movie = new MovieModel();

      var id = activatedRoute.snapshot.paramMap.get('id');
      movieService.getMovieById(id).subscribe(
        data => {
          this.movie = new MovieModel();
          this.movie.id = id;
          this.movie.title = data.title;
          this.movie.overview = data.overview;
          this.movie.posterPath = this.movieService.getPictureUrl(500) + data.poster_path;
          this.movie.backdropPath = this.movieService.getPictureUrl(500) + data.backdrop_path;
          console.log(data)
        }
      );
  }

  ngOnInit() {
  }

}
