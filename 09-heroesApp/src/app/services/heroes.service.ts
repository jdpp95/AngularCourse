import { Injectable } from '@angular/core';
import { HeroModel } from '../models/hero.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://heroapp-96748.firebaseio.com/';

  constructor(private http: HttpClient) { }

  createHero(hero: HeroModel) {
    return this.http.post(`${this.url}/heroes.json`, hero)
      .pipe(
        map( (response: any) => {
          hero.id = response.name;
          return hero;
        })
      );
  }

  updateHero(hero: HeroModel) {
    const heroAux = {
      ...hero
    };

    delete heroAux.id;

    return this.http.put(`${this.url}/heroes/${hero.id}.json`, heroAux);
  }

  getHeroes(){
    return this.http.get(`${this.url}/heroes.json`).pipe(
      map( this.toArray )
    );
  }

  getHeroById(id: string) {
    return this.http.get(`${this.url}/heroes/${id}.json`)
  }

  deleteHeroById(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}.json`)
  }

  private toArray(heroesObj: object) {
    const heroes: HeroModel[] = [];
    
    if(heroesObj === null) { return []; }

    Object.keys(heroesObj).forEach( key => {
      const hero: HeroModel = heroesObj[key];
      hero.id = key;
      heroes.push(hero);
    });

    return heroes;
  }
}
