import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movie: MovieModel;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewMovieDetails(movie: MovieModel)
  {
    this.router.navigate(['/movie', movie.id]);
  }
}
