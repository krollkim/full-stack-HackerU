import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './client-response.interface';


@Component({
  selector: 'app-clients-response',
  templateUrl: './clients-response.component.html',
  styleUrls: ['./clients-response.component.css']
})
export class ClientsResponseComponent implements OnInit {

  @Input()
  value: number | string;

  @Output()
  valueChange = new EventEmitter;
  
  val: boolean = true;

    responses: Response[] = [];

 
    remove(id: number) {
      const sub = this.http.delete<void>(`http://localhost:3000/contact/${id}`).subscribe(() => {
        console.log(id);
        
        const i = this.responses.findIndex(x => x.id == id);
        this.responses.splice(i, 1);

        sub.unsubscribe();
      });
  }

  complete(item: Response){
    const sub = this.http.put<void>(`http://localhost:3000/contact/${item.id}/complete`, {}).subscribe(() => {
    item.isCompleted = true;
      sub.unsubscribe();
  });
}
  undo(item: Response){
    const sub = this.http.put<void>(`http://localhost:3000/contact/${item.id}/undo`, {}).subscribe(() => {
      item.isCompleted = false;
        sub.unsubscribe();
  });
}
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const sub = this.http.get<Response[]>("http://localhost:3000/contact/list").subscribe(data => {
        this.responses = data;

        sub.unsubscribe();
    });

  }
}
