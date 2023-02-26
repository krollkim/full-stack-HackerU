import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { TaskStatuses } from '../tasks/tasks.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // dashbord
  statuses = [
    {
      status: TaskStatuses.open,
      title: 'Open-Tasks',
      color: 'lightgreen',
      cards: [],
      count: 0,
    },

    {
      status: TaskStatuses.inProgress,
      title: 'inProgress-Tasks',
      color: 'lightblue',
      cards: [],
      count: 0,
    },

    {
      status: TaskStatuses.complete,
      title: 'complete-Tasks',
      color: 'lightcoral',
      cards: [],
      count: 0,
    }
  ];

  constructor( private http: HttpService) { }

  // dashbord
  ngOnInit() {
      const sub = this.http.get<{ status: number; count: number }[]>("tasks/counter").pipe(finalize(() => {
        if (sub?.unsubscribe) {
            sub.unsubscribe();
        }
    })).subscribe(data => {
      data.forEach(x => {
          const item = this.statuses.find(s => s.status == x.status);

          if (item) {
              item.count = x.count;
          }
      });
  });
}
}
