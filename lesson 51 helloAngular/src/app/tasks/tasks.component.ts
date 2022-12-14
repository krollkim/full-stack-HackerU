import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskStatuses, Structure, Task} from './tasks.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  TaskStatuses = TaskStatuses;
  tasks : Task [] = [];

    addedItem: Task = {
        id: 0,
        task: "",
        createTime : new Date,
        status: TaskStatuses.open,
        isDeleted: false,
    };

  sections:  Structure[] = [

    {
      status: TaskStatuses.open,
      title: 'Open-Tasks',
      color: 'lightgreen',
      cards: [],
    },

    {
      status: TaskStatuses.inProgress,
      title: 'inProgress-Tasks',
      color: 'lightblue',
      cards: [],
    },

    {
      status: TaskStatuses.complete,
      title: 'complete-Tasks',
      color: 'lightcoral',
      cards: [],
    }
  ];

  // addTaskStat(item: Task, newStatus: TaskStatuses){
  //   const sub = this.http.post<Task>(`http://localhost:3000/tasks/${item.id}/status/${newStatus}`, {}).subscribe(data => {
  //     const struc = this.sections.find(x => x.status == newStatus);
  //     item.status = newStatus;
  //     struc?.cards.push(item);
  
  //     sub.unsubscribe();
  //   });
  // }

  // addTask(item: Task){
  //   this.addTaskStat(item, TaskStatuses.open);
  // }

  addTask() {
    this.http.post<Task>("http://localhost:3000/tasks", this.addedItem).subscribe(newtask => {
      this.tasks.push(newtask);
    
    });

}

  changeStatus(s: Structure, item: Task, newStatus: TaskStatuses) {
   const sub = this.http.put<void>(`http://localhost:3000/tasks/${item.id}/status/${newStatus}`, {}).subscribe(() => {
   const i = s.cards.findIndex(x => x.id === item.id);
   s.cards.splice(i, 1);
    const struc = this.sections.find(x => x.status == newStatus);
    item.status = newStatus;
    struc?.cards.push(item);

    sub.unsubscribe();
    });
  }

  undo(s: Structure, item: Task) {
    if(s.status == TaskStatuses.complete){
      this.changeStatus(s, item, TaskStatuses.inProgress);
    }
    else{
      this.changeStatus(s, item, TaskStatuses.open);
    }
  }

  prossing(s: Structure, item: Task) {
    this.changeStatus(s, item, TaskStatuses.inProgress);
  }

  complete(s: Structure, item: Task) {
    this.changeStatus(s, item, TaskStatuses.complete);
  }

  clearTask(s: Structure, item: Task){
   const sub = this.http.delete<void>(`http://localhost:3000/tasks/${item.id}`, {}).subscribe(() => {
   const i = s.cards.findIndex(x => x.id === item.id);
   s.cards.splice(i, 1);

   sub.unsubscribe();
    });
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const sub = this.http.get<Task[]>("http://localhost:3000/tasks").subscribe(data => {
      data.forEach(task => {
        const item = this.sections.find(s => s.status == task.status);
        item?.cards.push(task);
      })
      
        sub.unsubscribe();
      
    })
  }
}
