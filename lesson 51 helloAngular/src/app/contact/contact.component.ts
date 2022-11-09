import { Component, OnInit } from '@angular/core';

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


send() {
  console.log(`fullName: ${this.fullName}`);
  console.log(`phone: ${this.phone}`);
  console.log(`email: ${this.email}`);
  console.log(`content: ${this.content}`);
  console.log(`satisfaction: ${this.satisfaction}`);
  
}

  constructor() { }

  ngOnInit(): void {
  }

}
