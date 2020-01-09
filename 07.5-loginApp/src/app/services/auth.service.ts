import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:'
  private apiKey = 'AIzaSyD_v-yUIaXgtmfKy6-1cwetGQw2dGTthf8'

  userToken : string;

  //Sign Up
  //signUp?key=[API_KEY]

  //Sign In
  //signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { 
    this.loadToken();
  }

  logout(){
    localStorage.removeItem('token');
  }

  login(user : UserModel){
    const authData = {
      ...user,
      returnSecureToken: true
    }

    return this.http.post(
      `${ this.url }signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map(
        response => {
          this.saveToken(response['idToken']);
          return response;
        }
      )
    );
  }

  newUser(user : UserModel){
    const authData = {
      ...user,
      returnSecureToken: true
    }

    return this.http.post(
      `${ this.url }signUp?key=${this.apiKey}`,
      authData
    ).pipe(
      map(
        response => {
          this.saveToken(response['idToken']);
          return response;
        }
      )
    );
  }

  private saveToken(idToken : string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  private loadToken() {
    var token = localStorage.getItem('token')
    if (token) {
      this.userToken = token
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenticated() : boolean{

    if(this.userToken.length < 2) return false;

    const expires = Number(localStorage.getItem('expires'));
    const expirationDate = new Date();
    expirationDate.setTime(expires);

    return expirationDate > new Date();
  }
}
