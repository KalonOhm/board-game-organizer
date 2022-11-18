import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpiration: string;
}

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //ToDo: get API key for BGG API
  signupUrl = ``;
  loginUrl = ``;

  currentUser = new BehaviorSubject<User | null>
  (null);
  userToken: string = "";

  private tokenExpiresTimer: any;

  constructor() {}

  register(email: string, password: string) {
    
  }

  login(email: string, password: string) {}


}
