import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title = 'home';
welcome = 'welcome to my website'
  constructor() { }

  ngOnInit(): void {
  }

}
