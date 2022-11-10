import { headerAnimation } from './../../../animations/headerAnimation';
import { UniversalService } from './../../services/universal.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {AnimationEvent} from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [headerAnimation],
})
export class HeaderComponent implements OnInit {
  public heading: string = 'null';
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.observe();
  }
  async observe() {
    UniversalService.headerHeading.subscribe((res: string) => {
      this.changeText();

      this.heading = res;
      this.cd.detectChanges();
    });
  }
  text:string='null';
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
}
