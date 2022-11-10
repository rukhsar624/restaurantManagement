import { AuthService } from './services/auth.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { fadeAnimation } from 'src/animations/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  title = 'restaurant-management';
  public login: boolean = false;
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    if (localStorage.getItem('access_token') != null) {
      this.login = true;
    } else {
      this.login = false;
    }
    this.observe();
  }
  async observe() {
    AuthService.signin.subscribe((res: any) => {
      if (res) {
        this.login = true;
      } else {
        this.login = false;
      }
      this.cd.detectChanges();
    });
  }
}
