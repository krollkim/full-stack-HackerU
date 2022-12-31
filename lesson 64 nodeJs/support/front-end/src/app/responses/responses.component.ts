import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './responses.inteface';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  data: Response[] = [];

  constructor(private http: HttpClient) { }

  remove(item: Response) {
    const sub = this.http.delete<void>(`http://localhost:3500/contact/${item.id}`).subscribe(() => {
        const i = this.data.findIndex(x => x.id === item.id);
        this.data.splice(i, 1);
        sub.unsubscribe();
    });
}

complete(item: Response) {
  const sub = this.http.put<void>(`http://localhost:3500/contact/${item.id}/status/complete`,{}).subscribe(() => {
    item.isCompleted = true;
    sub.unsubscribe();
  });
}

undo(item: Response){
  const sub = this.http.put<void>(`http://localhost:3500/contact/${item.id}/status/undo`,{}).subscribe(() => {
    item.isCompleted = false;
    sub.unsubscribe();
  });
}

  ngOnInit(): void {
    const sub = this.http.get<Response[]>("http://localhost:3500/contact").subscribe(data => {
      this.data = data;
      sub.unsubscribe();
    })
  }

}
