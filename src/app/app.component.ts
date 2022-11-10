import { UniversalService } from './services/universal.service';
import { AuthService } from './services/auth.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { fadeAnimation } from 'src/animations/animation';
import { fadeIn } from 'src/animations/itemCartAnimation';
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
  constructor(private cd: ChangeDetectorRef) {}
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
}
