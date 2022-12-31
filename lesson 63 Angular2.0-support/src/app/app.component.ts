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

  @Output()
  valueChange = new EventEmitter;
  
  val: boolean = true;

  response: Content[] = [];

  complete(item: Content){
    const sub = this.http.put<void>(`http://localhost:3500/contacts/${item.id}/complete`, {}).subscribe(() => {
    item.isCompleted = true;
      sub.unsubscribe();
  });
}
  undo(item: Content){
    const sub = this.http.put<void>(`http://localhost:3500/contacts/${item.id}/undo`, {}).subscribe(() => {
      item.isCompleted = false;
        sub.unsubscribe();
  });
}
  remove(id: number) {
    const sub = this.http.delete<void>(`http://localhost:3500/contacts/${id}`).subscribe(() => {
      console.log(id);
      
      const i = this.response.findIndex(x => x.id == id);
      this.response.splice(i, 1);

      sub.unsubscribe();
    });
}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const sub = this.http.get<Content[]>("http://localhost:3500/contact").subscribe(data => {
        this.response = data;
       
        console.log(this.response);

        sub.unsubscribe();
    });
 
  }
}
