import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

@Input()
 width: number;

@Input()
 height: number;
 
@Input()
 color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
