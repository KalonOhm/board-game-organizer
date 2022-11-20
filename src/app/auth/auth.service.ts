import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  providedIn: 'root',
})
export class AuthService {
  signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`;
  loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`;

  currentUser = new BehaviorSubject<User | null>(null);
  userToken: string = '';

  private tokenExpiresTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const formUser = new User(email, userId, token, expDate);
    this.currentUser.next(formUser);

    //serialize user
    localStorage.setItem(
      environment.userDataLocalStorageKey,
      JSON.stringify(formUser)
    );

    this.autoLogOut(expiresIn * 1000);
  }

  logOut() {
    this.currentUser.next(null);

    localStorage.removeItem(environment.userDataLocalStorageKey);

    if (this.tokenExpiresTimer) clearTimeout(this.tokenExpiresTimer);

    this.router.navigate(['auth']);
  }

  autoLogOut(expireDuration: number) {
    console.log('Expire Duration: ', expireDuration);
    this.tokenExpiresTimer = setTimeout(this.logOut, expireDuration);
  }

  register(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signupUrl, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, Number(expiresIn));
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.loginUrl, {
      email,
      password,
      returnSecureToken: true,
    })
    .pipe(
      tap((res) => {
        const { email, localId, idToken, expiresIn } = res;
        this.handleAuth(email, localId, idToken, Number(expiresIn));
      })
    );
  }

  autoLogin() {
    console.log('automatic login processed');
    const userData: UserData = JSON.parse(
      localStorage.getItem(environment.userDataLocalStorageKey) ?? ''
    );

    console.log(userData);

    if (!userData) return;

    const { email, id, _token, _tokenExpiration }: UserData = userData;
    const loadedUser = new User(email, id, _token, new Date(_tokenExpiration));

    console.log('Loaded user: ', loadedUser);

    if (loadedUser.token) {
      this.currentUser.next(loadedUser);
    }
    console.log(this.userToken);
  }
}
