import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Nav } from './navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  active: string;

  menu: Nav[] = [
    { route: '/', title: 'home', icon: 'home' },
    { route: '/users', title: 'users', icon: 'users' },
    { route: '/list', title: 'lists', icon: 'list' },
    { route: '/contact', title: 'contacts', icon: 'envelope' },
    { route: '/settings', title: 'settings', icon: 'cog' },
    { route: '/gallery', title: 'gallery', icon: 'camera' },
    { route: '/clients', title: 'clients', icon: 'user' },
    { route: '/clients-response', title: 'contact responses', icon: 'server' },
    { route: '/tasks', title: 'check-list', icon: 'check-square-o' },

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
