import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes: Hero[];
  query: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.query = params['query'];
        this.heroes = this.heroesService.findHero(this.query);
      }
    );
  }

}
