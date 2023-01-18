import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Nav } from './navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  active?: string;

  menu: Nav[] = [
    { route: '/', title: 'home', icon: 'home' },
    { route: '/tasks', title: 'tasks', icon: 'check-square-o' },
];


  constructor(router: Router) {
      router.events.subscribe(ev => {
        if (ev instanceof NavigationStart) {
          this.active = ev.url;
        }
      })    
   }

  ngOnInit(): void {
  }

}
