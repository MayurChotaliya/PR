import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent {
  
  constructor(private router: Router,private location: Location) {}
  
  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, true);
  }

  goBack() {
    this.router.navigate(['/member']);
  }
}
