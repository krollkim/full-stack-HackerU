import { Component, Input, Output, EventEmitter,} from '@angular/core';
import { Content } from './app.interface'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'support';

  response: Content[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const sub = this.http.get<Content[]>("http://localhost:3500/contact").subscribe(data => {
        this.response = data;
       
        console.log(this.response);

        sub.unsubscribe();
    });
 
  }
}
