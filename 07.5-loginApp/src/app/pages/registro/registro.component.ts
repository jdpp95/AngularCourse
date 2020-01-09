import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { FormsModule, NgForm } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: UserModel;
  rememberMe = false;

  constructor(private auth : AuthService) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(form: NgForm) {
    if(form.invalid) return;

    this.auth.newUser(this.user).subscribe(
      response => {
        console.log(response)

        if(this.rememberMe) {
          localStorage.setItem('email', this.user.email)
        }

      },
      err => {
        console.error(err.error.error.message)
      }
    )
  }
}
