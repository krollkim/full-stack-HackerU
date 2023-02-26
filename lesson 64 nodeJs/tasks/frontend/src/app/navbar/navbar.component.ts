import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UtilityService } from '../Utilityservice';
import { Nav } from './navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active?: string;
  isOpen: boolean = false
  utility?: any;

  menu: Nav[] = [
    { route: '/', title: 'home', icon: 'home' },
    { route: '/tasks', title: 'tasks', icon: 'tasks' },
    { route: 'about', title: 'about', icon: 'edit' },
  ];

  sideBar: Nav[] = [
    ...this.menu, 
    { route: '/market/products/manage', title: 'product-manage', icon: 'edit' },
    { route: '/market/products', title: 'store', icon: 'store' },
    { route: '/market/cart', title: 'cart', icon: 'shopping-cart', counter: 'cartAmount' },
  
    // { route: '/market/vegetables', title: 'ירקות', icon: 'carrot' },
    // { route: '/market/fruits', title: 'פירות', icon: 'apple-alt' },
    // { route: '/market/legumes', title: 'קטניות', icon: 'seedling' },
    // { route: '/market/greens', title: 'ירוקים', icon: 'leaf' },
];

 


  constructor(router: Router, utility: UtilityService) {
    this.utility = utility;
    
      router.events.subscribe(ev => {
        if (ev instanceof NavigationStart) {
          this.active = ev.url;
          this.isOpen = false;
        }
      })    
   }

  ngOnInit(): void {
  }

}
