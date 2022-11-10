import { headerAnimation } from './../../../animations/headerAnimation';
import { UniversalService } from './../../services/universal.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [headerAnimation],
})
export class HeaderComponent implements OnInit {
  public heading: string = 'null';
  public cartButton: boolean = true;
  public headingShow: boolean = true;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (localStorage.getItem('cart') == 'true') {
      this.cartButton = true;
      this.headingShow = false;
    } else {
      this.cartButton = false;
      this.headingShow = true;
    }
    this.observe();
  }
  async observe() {
    UniversalService.headerHeading.subscribe((res: string) => {
      this.changeText();
      this.heading = res;
      this.cd.detectChanges();
    });
    UniversalService.cartShow.subscribe((res: boolean) => {
      if (res) {
        this.headingShow = false;
        this.cartButton = true;
        localStorage.setItem('cart', 'true');
      } else {
        this.headingShow = true;
        this.cartButton = false;
        localStorage.setItem('cart', 'false');
      }
      this.cd.detectChanges();
    });
  }
  text: string = 'null';
  currentState = 'hidden';

  changeText() {
    this.currentState = 'hidden';
  }
  animationFinished(event: AnimationEvent) {
    if (event.fromState === 'void' && event.toState === 'hidden') {
      this.text = this.heading;
      this.currentState = 'visible';
    } else if (event.fromState === 'visible' && event.toState === 'hidden') {
      this.text = this.heading;
      this.currentState = 'visible';
    }
  }
  cartShow() {
    this.cartButton = !this.cartButton;
    if (this.cartButton) {
      UniversalService.cartShow.next(true);
    } else {
      UniversalService.cartShow.next(false);
    }
  }
}
