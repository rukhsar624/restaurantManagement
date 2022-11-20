import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversalService } from 'src/app/services/universal.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private router:Router, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.observe('support');
  }
  async observe(path: string) {
    if (path) {
      this.router.navigate([`counter/${path}`]);
    }
    UniversalService.headerHeading.subscribe((res: string) => {
      let path = res.toLowerCase();
      this.router.navigate([`counter/${path}`]);
      this.cd.detectChanges();
    });
  }

}
