import { Injectable } from '@angular/core';
import { Observable, take, map } from 'rxjs';
import { AuthService } from './auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.currentUser.pipe(
      take(1),
      map((user) => {
        const isAuthenticated = !!user;
        if (isAuthenticated) return true;
        return this.router.createUrlTree(['auth']);
      })
    );
  }
}
