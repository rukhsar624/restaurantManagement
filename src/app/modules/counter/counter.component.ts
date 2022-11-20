import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversalService } from 'src/app/services/universal.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private router:Router, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.observe('orders')
  }
  async observe(path:string) {
    console.log(path,"hellopath");
    
    if(path){
      this.router.navigate([`counter/${path}`])
    }
    UniversalService.routePath.subscribe((res: string) => {      
      let path = res.toLowerCase()
      this.router.navigate([`counter/${path}`])
      this.cd.detectChanges();
    });
  }
}
