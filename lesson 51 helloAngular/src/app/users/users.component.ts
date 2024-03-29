import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { users } from './users.data';
import { User } from './users.interface';
// import { User } from './users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = users;
  user = 'users';
  searchVal: string;

  // remove(i: number){
  //   this.users.splice(i,1);
  // }
  remove(user: User) {
    const i = this.users.findIndex(x => x.id == user.id);
    this.users.splice(i, 1);
}

  constructor(utility: UtilityService) {
    
   }

  ngOnInit(): void {
  }

}
