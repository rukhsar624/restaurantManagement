import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
    private authService:AuthGuardService) { }
  canActivate(next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let user = (localStorage.getItem('access_token'));
    if (!user ) {
      this.router.navigate(['/']);
      return true
    }
    else if (user) {
      if (!Object.keys(user).length) {
        this.router.navigate(['']);
        return true
      }
    }
    return true
  }
  
}
