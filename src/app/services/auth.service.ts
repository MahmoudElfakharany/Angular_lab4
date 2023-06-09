import { Iuser } from './../component/iuser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Iuser | undefined;
  constructor() {}
  login(username: string, password: string) {
    this.currentUser = {
      username: username,
      password: password,
    };
  }

  get isLoggedIn(): boolean {
    if (this.currentUser?.username && this.currentUser.password) {
      console.log("true")
      return true;
    } else {
      console.log("false")
      return false;
    }
  }

  logOut() {
    this.currentUser = undefined;
  }
}