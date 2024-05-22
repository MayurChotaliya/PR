import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  isMyMembers: boolean = false;

  sidebarVisible4: boolean;

  profilePic = 'assets/img.gif'; // Add a profile picture to your assets folder
  fullName = 'Test Testters reewr';
  chips = ['Online', 'Available', 'VIP'];
  menuItems: MenuItem[];
  
  constructor(private router: Router) { }
  
  ngOnInit() {
    this.menuItems = [
      { label: 'View Profile', icon: 'pi pi-fw pi-user' },
      { label: 'Call', icon: 'pi pi-fw pi-phone' },
      { label: 'Message', icon: 'pi pi-fw pi-comments' },
    ];
  }

  toggleMembership() {
    this.isMyMembers = !this.isMyMembers; // Toggle the boolean value
  }
  goToDetail(){
    this.router.navigate(['/detail']);
  }
}
