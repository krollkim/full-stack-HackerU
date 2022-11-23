import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  product: string;

  listTitle = 'list';
  list: string[] = [
    "מלפפון",
    "עגבניה",
    "גמבה",
    "חציל",
    "כוסברה",
];


addProduct() {
    this.list.push(this.product);
    this.product = "";
    localStorage["list"] = JSON.stringify(this.list);
    
}

removeItem(i: number) {
    this.list.splice(i, 1);

    localStorage["list"] = JSON.stringify(this.list);
}

  
  constructor() { }

  ngOnInit(): void {
   if(localStorage['list'])
    
   this.list = JSON.parse(localStorage['list']);


    console.log(localStorage["list"] = JSON.stringify(this.list));
  }
}
