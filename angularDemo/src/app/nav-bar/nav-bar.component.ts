import { Component, OnInit } from '@angular/core';
import { Nav } from './navBar.interface';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menu: Nav[] = [
    {route: "/", title: 'Home'},
    {route: "/users", title: "Users"},
    {route: "/gallery", title: "gallery"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
