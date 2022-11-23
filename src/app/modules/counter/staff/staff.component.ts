import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversalService } from 'src/app/services/universal.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private router:Router, private cd:ChangeDetectorRef) { }
  public Staff: any = [      
        {
          id: 1,
          Name: 'John',
          position: 'Waiter',
          shift: 'Morning',
          tables: 'T1,T2,T3,T4',
        },
        {
          id: 1,
          Name: 'John',
          position: 'Manager',
          shift: 'Morning',
          tables: 'T1,T2,T3,T4',
        },
        {
          id: 1,
          Name: 'John Sandwich',
          position: 'Waiter',
          shift: 'Morning',
          tables: 'T1,T2,T3,T4',
        },
        {
          id: 1,
          Name: 'John',
          position: 'Waiter',
          shift: 'Morning',
          tables: 'T1,T2,T3,T4',
        }
  ];
  ngOnInit(): void {
    this.observe('staff');
  }
  async observe(path: string) {
    if (path) {
      this.router.navigate([`counter/${path}`]);
    }
    UniversalService.routePath.subscribe((res: string) => {
      let path = res.toLowerCase();
      this.router.navigate([`counter/${path}`]);
      this.cd.detectChanges();
    });
  }

}
