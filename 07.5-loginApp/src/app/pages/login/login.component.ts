import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel
  rememberMe = false

  constructor(
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    this.user = new UserModel();

    if(localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email');
      this.rememberMe = true
    }
  }

  login(form: NgForm) {
    if(!form.invalid)
      console.log('Print ONLY if the form is valid')

      Swal.fire({
        icon: 'info',
        title: 'Espere por favor...',
        allowOutsideClick: true
        //text: 'Something went wrong!',
        //footer: '<a href>Why do I have this issue?</a>'
      })

      Swal.showLoading();

    this.auth.login(this.user).subscribe(
      response => {
        console.log(response);
        Swal.close();

        if(this.rememberMe) {
          localStorage.setItem('email', this.user.email)
        }

        this.router.navigateByUrl('/home');
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: err.error.error.message
          //text: 'Something went wrong!',
          //footer: '<a href>Why do I have this issue?</a>'
        })
      }
    );
  }

}
