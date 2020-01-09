import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

  alertType:string = 'alert-danger'
  properties:Object = {
    danger : false
  }
  loading:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  execute() {
    this.loading = true;
    setTimeout( 
      () => this.loading = false,
      3000
    )
  }

}
