import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroModel } from 'src/app/models/hero.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroModel[] = [];
  loading = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.loading = true;
    this.heroesService.getHeroes()
      .subscribe(resp => {
        console.log(resp);
        this.heroes = resp;
        this.loading = false;
      });
  }

  deleteHero(hero: HeroModel, i: number){
    Swal.fire({
      title: "¿Esta seguro?",
      text: `Está seguro que desea borrar a ${ hero.name }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( response => {
      if(response.value) {
        this.heroes.splice(i, 1);
    this.heroesService.deleteHeroById(hero.id).subscribe();
      }
    });
  }
}
