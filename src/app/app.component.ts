import { UniversalService } from './services/universal.service';
import { AuthService } from './services/auth.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { fadeAnimation } from 'src/animations/animation';
import { fadeIn } from 'src/animations/itemCartAnimation';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation,fadeIn],
})
export class AppComponent {
  title = 'restaurant-management';
  public login: boolean = false;
  public cart: boolean = false;
  private role:any = localStorage.getItem('role')
  constructor(private cd: ChangeDetectorRef, private router: Router) {
    if(localStorage.hasOwnProperty('role')){
      this.router.events.subscribe((ev) => {
        if (ev instanceof NavigationEnd) {
          if(localStorage.hasOwnProperty('role')){
            if(this.role != null){
              if(ev.url.split('/')[1] != this.role && ev.url != '/'){
                this.router.navigate([`/${this.role}`])
              }
            }
            else{
              return false
            }
          }
        }
      });
    }
  }
  ngOnInit(): void {
    if (localStorage.getItem('access_token') != null) {
      this.login = true;
    } else {
      this.login = false;
    }
    if (localStorage.getItem('cart') == 'true') {
      this.cart = true;
    } else {
      this.cart = false;
    }
    this.observe();
  }
  async observe() {
    AuthService.signin.subscribe((res: boolean) => {
      if (res) {
        this.login = true;
      } else {
        this.login = false;
      }
      this.cd.detectChanges();
    });
    UniversalService.cartShow.subscribe((res: boolean) => {
      if (res) {
        this.cart = true;
      } else {
        this.cart = false;
      }
      this.cd.detectChanges();
    });
  }
  changeOfRoutes(){

  }
}
