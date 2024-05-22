import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent {
  
  constructor(private router: Router,private location: Location) {}

  goBack() {
    this.router.navigate(['/member']);
  }

}
