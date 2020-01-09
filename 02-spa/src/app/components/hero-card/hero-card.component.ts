import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;
  @Output() chosenHero : EventEmitter<number>;

  constructor(
    private router: Router
  ) { 
    this.chosenHero = new EventEmitter();
  }

  ngOnInit() {
  }

  viewHero(){
    //console.log("Emit id to parent")
    //this.chosenHero.emit(this.index);
    this.router.navigate(['/hero', this.index]);
  }

}
