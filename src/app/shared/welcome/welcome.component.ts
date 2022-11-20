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
  skip:any = true;
  url:string;
  constructor(private router: Router, private helper:HelperService, private authGuardService: AuthGuardService) { }

  ngOnInit(): void {
    this.href = this.router.url;
    if(this.helper.urlSplit(this.href) == 'welcome-waiters'){
      this.skip = this.helper.urlCheck(this.href, 'welcome-waiters', 'waiters')
    }
    if(this.helper.urlSplit(this.href) == 'welcome-kitchen'){
      this.skip = this.helper.urlCheck(this.href, 'welcome-kitchen', 'kitchen')
    }
    if(this.helper.urlSplit(this.href) == 'welcome-customers'){
      this.skip = false
    }
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
    if(this.helper.urlSplit(this.href) == 'welcome-kitchen'){
      this.router.navigate(['/kitchen'])
      this.authGuardService.login('kitchen')
    }
    if(this.helper.urlSplit(this.href) == 'welcome-counter'){
      this.router.navigate(['/counter'])
      this.authGuardService.login('counter')
    }
    AuthService.signin.next(true)
    UniversalService.modules.next(true)
  }
}
