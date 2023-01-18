import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { UtilityService } from './Utilityservice';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Userlogin } from './login/login.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task manager';


  logout() {
    const sub = this.http.get("logout").pipe(finalize(() => {
        if (sub?.unsubscribe) {
            sub.unsubscribe();
        }
    })).subscribe(() => {
        this.utility.setUser();
        this.router.navigate(['login']);
    });
}

  constructor(public utility: UtilityService, private http: HttpService, private router: Router) { }

  ngOnInit() {
      const sub = this.http.get<Userlogin>("login").pipe(finalize(() => {
          if (sub?.unsubscribe) {
              sub.unsubscribe();
          }
      })).subscribe(data => {
          if (data.status == 'error') {
              this.router.navigate(['login']);
          } else {
              this.utility.setUser(data.user);
          }
      });
  }
}

