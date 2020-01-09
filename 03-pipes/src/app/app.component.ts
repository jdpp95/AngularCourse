import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name = "Juan"
  fullName = "JUAn DAvID POrras pALenciA"
  array = [1,2,3,4,5,6,7,8,9,10];
  a = 0.234;
  salary = 1828.116;

  PI = Math.PI;

  hero = {
    name: "Logan",
    key: "Wolverine",
    age: 500,
    address: {
      calle: 119,
      carrera: 19,
      oficina: 516
    }
  }

  video = "8SbUC-UaAxE";

  date = new Date();

  promiseValue = new Promise(
    (resolve, reject) => {
      setTimeout(()=>resolve('Data has arrived!'), 3500)
    }
  );

  enable: boolean = true;
  password: string = this.video;
}
