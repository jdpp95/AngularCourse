import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: HeroModel = new HeroModel();

  constructor(
    private heroService: HeroesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id !== 'new')
    {
      this.heroService.getHeroById(id).subscribe(
        (response: HeroModel) => {
          this.hero = response;
          this.hero.id = id;
        }
      );
    }
  }

  save(form: NgForm) {

    if (form.invalid) {
      console.log("Invalid form D:");
      return;
    }

    let request: Observable<any>;

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    if (this.hero.id) {
      request = this.heroService.updateHero(this.hero);
    } else {
      request = this.heroService.createHero(this.hero);
    }

    request.subscribe(
      response => {
        Swal.fire({
          title: this.hero.name,
          text: 'Se actualizó correctamente',
          icon: 'success'
        });
      }
    );
  }


}
