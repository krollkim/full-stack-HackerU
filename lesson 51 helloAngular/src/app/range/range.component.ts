import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {
  
  @Input()
  min: number = 10;

  @Input()
  max: number = 100;

  @Input()
  value: number | string;

  @Output()
  valueChange = new EventEmitter;
  
  change(){
    this.valueChange.emit(this.value);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
