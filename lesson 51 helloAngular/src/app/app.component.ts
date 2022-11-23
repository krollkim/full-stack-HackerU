import { Component } from '@angular/core';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular - practice';
  home = 'home';
  users = 'users';
  list = 'list';
  contact = 'contact';
  setting = 'setting';
  gallery = 'gallery';


constructor(private utility: UtilityService) {}

    ngOnInit() {
        this.utility.setStyling();
    }
}
