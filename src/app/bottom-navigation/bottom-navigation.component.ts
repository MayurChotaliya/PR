import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent {
  constructor(private router: Router) {}
  
  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
