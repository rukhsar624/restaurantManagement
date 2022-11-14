import { AuthGuardService } from './../services/auth-guard.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InnerGuard implements CanActivate {
  constructor(
    private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // Guard for user is login or not
      let user = (localStorage.getItem('access_token'));
      if (user) {
        if (Object.keys(user).length > -1) {
          this.router.navigate(['/customers']);
          return true
        }
      }
      return true
    }
  
}