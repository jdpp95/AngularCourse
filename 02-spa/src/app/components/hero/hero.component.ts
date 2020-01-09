import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {

  hero:any = {};

  constructor(
    private activatedRoute : ActivatedRoute,
    private _heroesService: HeroesService
  ) { 
    this.activatedRoute.params.subscribe( 
      params => {
        this.hero = this._heroesService.getHero(params['id']);
      }
    );
  }

  ngOnInit() {
  }

}
