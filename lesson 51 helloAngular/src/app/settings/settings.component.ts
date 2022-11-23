import { Component,Input, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Setting } from './settings.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  setting = "Setting";
  settings: Setting[] = [
    {field: "brightness", title: "brightness", min: 0, max: 100 , value: 100, default: 100},
    {field: "spacing", title: "spacing", min: 0, max: 100 , value: 0},
    {field: "fontSize", title: "fontSize", min: 0, max: 100 , value: 0},
    {field: "padding", title: "padding", min: 0, max: 100 , value: 0},
    {field: "revertColor", title: "revertColor", min: 0, max: 100 , value: 0},
  ];

  change(item: Setting){
    localStorage[item.field] = item.value;

    this.utility.setStyling();
  }

  reset(){
    this.settings.forEach(s => {
      s.value = s.default || 0;
      localStorage[s.field] = s.default || 0;
      this.utility.setStyling();
    });
  }

  constructor(private utility: UtilityService) { 
    
  }

  ngOnInit(): void {
    this.settings.forEach(s => {
      if(localStorage[s.field]){
        s.value = +localStorage[s.field];
      }
    })
    console.log(localStorage);
  }
}
