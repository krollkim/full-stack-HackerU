import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Task } from '../tasks.interface';
// import { TasksComponent } from '../tasks.component';


@Component({
  selector: 'app-recycle-bin',
  templateUrl: './recycle-bin.component.html',
  styleUrls: ['./recycle-bin.component.scss']
})
export class RecycleBinComponent implements OnInit {

  data: Task[] = [];
  
  returnTask(item: Task){
    const sub = this.http.put<void>(`tasks/restore/${item.id}`, {}).pipe(finalize(() => {

      if(sub?.unsubscribe){
        sub.unsubscribe();
      }
    })).subscribe(() => {

    item.isDeleted = false;
    console.log(item);
    
     });
    const i = this.data.findIndex(x => x.id === item.id);
     this.data.splice(i, 1);
   }

   constructor(private http: HttpService) { }

  ngOnInit(): void {
    const sub = this.http.get<Task[]>("tasks?deleted=true").subscribe(data => {
      this.data = data;
        sub.unsubscribe();
      
    });
  
  }
}
