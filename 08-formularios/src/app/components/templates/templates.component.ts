import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplatesComponent implements OnInit {

  user : Object = {
    name: null,
    lastName: null,
    email: null,
    country: "",
    sex: "Hombre",
    accept: false
  }

  genders = ["Hombre", "Mujer"]

  countries = [
    {
      code: "COL",
      name: "Colombia"
    },
    {
      code: "ESP",
      name: "España"
    },
    {
      code: "CRC",
      name: "Costa Rica"
    }
]

  constructor() { }

  ngOnInit() {
  }

  save(myForm:NgForm){
    console.log("POSTed form");
    console.log("ngForm", myForm);
    console.log("Value",myForm.value);
  }

}
