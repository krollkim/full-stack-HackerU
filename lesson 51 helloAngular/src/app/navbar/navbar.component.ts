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
    {route: '/', title: 'Home'},
    {route: '/users', title: 'users'},
    {route: '/list', title: 'list'},
    {route: '/contact', title: 'contact'},
    {route: '/gallery', title: 'gallery'},
    {route: '/clients', title: 'clients'},
    {route: '/settings', title: 'settings'},
  ]
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
