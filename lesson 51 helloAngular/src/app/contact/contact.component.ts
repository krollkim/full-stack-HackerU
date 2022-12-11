import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

fullName: string;
phone: string;
email: string;
content: string;
satisfaction: number | string;

contact = 'contact';

send() {
  const obj = {
      fullName: this.fullName,
      phone: this.phone,
      email: this.email,
      content: this.content,
      satisfaction: this.satisfaction,
  };


  

  this.http.post<void>("http://localhost:3000/contact", obj).subscribe(()=> {
    this.utility.alert("טופס נשלח בהצלחה");
 });
}
 
  constructor(private utility: UtilityService, private http: HttpClient) { }

  ngOnInit(): void { }

}
