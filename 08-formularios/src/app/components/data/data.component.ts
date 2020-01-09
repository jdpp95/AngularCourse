import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  myForm: FormGroup;

  user: Object = {
    fullName: {
      name: "Juan David",
      lastName: "Porras"
    },
    email: "juan.porras@itac.co"
  }

  constructor() { 
    this.myForm = new FormGroup({

      'fullName': new FormGroup({
        'name': new FormControl('', 
        [
          Validators.required,
          Validators.minLength(3),
          this.validarSinCesar
        ]),
  
        'lastName': new FormControl('', Validators.required)
      }),      

      'email' : new FormControl('', [
        Validators.required, 
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+(\.[a-z]{2,3})+$")
      ]),

      'hobbies' : new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username' : new FormControl('', Validators.required, this.userExists),
      'password1' : new FormControl('', Validators.required),
      'password2' : new FormControl()
    });

    //this.myForm.setValue(this.user);

    this.myForm.controls['password2'].setValidators([
      Validators.required,
      this.passwordNotEqual.bind(this.myForm)
    ]);

    this.myForm.controls['username'].valueChanges.subscribe(
      data => console.log(data)
    );

    this.myForm.controls['username'].statusChanges.subscribe(
      data => console.log(data)
    );
  }

  addHobbie(){
    (<FormArray>this.myForm.controls['hobbies']).push(
      new FormControl('', Validators.required)
    );
  }

  validarSinCesar(control: FormControl) : {[s:string]:boolean} {
    if(control.value === 'Cesar'){
      return {
        sinCesar: true
      }
    }

    return null;
  }

  passwordNotEqual(control: FormControl) : {[s:string]:boolean} {

    let myForm:any = this;

    if(control.value !== myForm.controls['password1'].value){
      return {
        notequal:true
      }
    }

    return null;
  }

  userExists(control: FormControl): Promise<any> | Observable <any>
  {
    let promise = new Promise(  
      (resolve, reject) => {
        setTimeout( () => {
          if(control.value === "jdpp95") {
            resolve({exists: true});
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );

    return promise;
  }

  saveChanges(){
    console.log(this.myForm.value);
    //this.myForm.reset(this.user);
  }

}
