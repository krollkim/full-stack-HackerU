import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-creator',
  templateUrl: './square-creator.component.html',
  styleUrls: ['./square-creator.component.css']
})
export class SquareCreatorComponent implements OnInit {

  @Input()
  width: number;

  @Input()
  heigth: number;

  @Input()
  color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
