import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TaskStatuses, Structure, Task, LevelTypes} from './tasks.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  // tasks : Task [] = [];

  //   addedItem: Task = {
  //       id: 0,
  //       task: "",
  //       createTime : new Date,
  //       status: TaskStatuses.open,
  //       isDeleted: false,
  //   };
  
  TaskStatuses = TaskStatuses;
  newTask: string;

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

  UrLevel = [
    {
      level: LevelTypes.low,
      title: 'low-priority',
      color: 'lightgreen',
    },
    {
      level: LevelTypes.medium,
      title: 'medium-priority',
      color: 'lightyellow',
    },
    {
      level: LevelTypes.high,
      title: 'high-priority',
      color: 'lightred',
    }
   
  ];
  
addTask() {
  const sub = this.http.post<Task>("http://localhost:3000/tasks", { task: this.newTask }).subscribe(data => {
  this.sections.find(x => x.status == TaskStatuses.open)?.cards.push(data);
      this.newTask = '';
      sub.unsubscribe();
  });
}


  private changeStatus(s: Structure, item: Task, newStatus: TaskStatuses) {
   const sub = this.http.put<void>(`http://localhost:3000/tasks/${item.id}/status/${newStatus}`, {}).subscribe(() => {
   const i = s.cards.findIndex(x => x.id === item.id);
   s.cards.splice(i, 1);
    const struc = this.sections.find(x => x.status == newStatus);
    item.status = newStatus;
    struc?.cards.push(item);

    sub.unsubscribe();
    });
  }

  private changePriority(item: Task, newPriority: LevelTypes) {
   const sub = this.http.put<void>(`http://localhost:3000/tasks/${item.id}/UrLevel/${newPriority}`, {}).subscribe(() => {
   
    const struc = this.UrLevel.find(x => x.level == newPriority);
    item.UrLevel = newPriority;
    struc?.level.valueOf();

    sub.unsubscribe();
    });
  }

  TaskPriority(s: LevelTypes, item: Task){
    if(this.UrLevel == LevelTypes){
      this.changePriority(s, item, LevelTypes.);
    }
  }

//  const sub = this.http.put<void>("http://localhost:3000/tasks", { Priority: this.UrLevel }).subscribe(() => {
//       this.UrLevel.find(x => x.level == item.UrLevel)?.
//       this.changePriority(s, item)
//     }


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
   const sub = this.http.delete<void>(`http://localhost:3000/tasks/${item.id}`).subscribe(() => {
   const i = s.cards.findIndex(x => x.id === item.id);
   s.cards.splice(i, 1);

   sub.unsubscribe();
    });
  }

  dragover(s: Structure){
    this.sections.forEach(x => x.isDrag = false);
    s.isDrag = true;
  }

  dragend(s: Structure, item: Task) {
    const target = this.sections.find(x => x.isDrag);

    if (target) {
        if (target.status !== s.status) {
            this.changeStatus(s, item, target.status);
        }
    }
    
    this.sections.forEach(x => x.isDrag = false);
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
