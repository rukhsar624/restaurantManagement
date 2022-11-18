import { Router } from '@angular/router';
import { UniversalService } from './../../services/universal.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  constructor(private cd:ChangeDetectorRef, private router:Router) { }

  ngOnInit(): void {
    this.observe('orders')
  }
  async observe(path:string) {
    if(path){
      this.router.navigate([`kitchen/${path}`])
    }
    UniversalService.headerHeading.subscribe((res: string) => {
      let path = res.toLowerCase()
      this.router.navigate([`kitchen/${path}`])
      this.cd.detectChanges();
    });
  }
}
