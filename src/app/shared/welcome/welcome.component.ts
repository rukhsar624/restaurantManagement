import { AuthGuardService } from './../../services/auth-guard.service';
import { HelperService } from './../../services/helper.service';
import { UniversalService } from './../../services/universal.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  href:string
  skip:boolean = true;
  url:string;
  constructor(private router: Router, private helper:HelperService, private authGuardService: AuthGuardService) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.skip = this.helper.urlCheck(this.href, 'welcome-waiters')
  }
  signin(){
    localStorage.setItem('access_token',"hellotoken")
    if(this.helper.urlSplit(this.href) == 'welcome-customers'){
      this.router.navigate(['/customers'])
      this.authGuardService.login('customers')
    }
    if(this.helper.urlSplit(this.href) == 'welcome-waiters'){
      this.router.navigate(['/waiters'])
      this.authGuardService.login('waiters')
    }
    AuthService.signin.next(true)
    UniversalService.modules.next(true)
  }
  // urlCheck(r:string) {
  //   this.url = r.split('/')[1];
  //   if(this.url == 'welcome-customers'){
  //     this.skip = false 
  //   }
  // }
}
