import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn : boolean
  constructor() { 
    this.loggedIn=false;
  }

  setLogIn()
  {
    this.loggedIn=true;
  }

  getLogIn()
  {
    return this.loggedIn;
  }
}
