import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseData, AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errMsg: string = "";
  authObserv: Observable<AuthResponseData> = new Observable;
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onAuthFormSubmit(form: NgForm) {
    console.log("Running submit loging form...");
    console.log(form.value);

    if (!form.valid) {
      return;
    }

    const { email, password } = form.value;

    if (this.isLoginMode) {
      this.authObserv = this.auth.login(email, password)
    } else {
      this.authObserv = this.auth.register(email, password)
    }

    this.authObserv.subscribe({
      next: (res) => {
        console.log("Auth Response Success: ", res)
        this.router.navigate(['gameshelf']);
      },
      error: (err) => {
        console.log("Auth Response Error", err);
        this.errMsg = err.message;
      },
    })
    form.reset();
  }
}
