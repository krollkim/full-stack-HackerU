import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from './clients.interface';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

    clients: Client[] = [];

    addedItem: Client = {
        id: 0,
        createTime: '',
        city: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '', 
        isFavorite: false,   
    }

    remove(id: number) {
      this.http.delete<void>(`http://localhost:3000/clients/${id}`).subscribe(() => {
        console.log(id);
        
        const i = this.clients.findIndex(x => x.id == id);
        this.clients.splice(i, 1);
      });
  }

 add(){
    this.http.post<Client>("http://localhost:3000/clients", this.addedItem).subscribe(item => {
        this.clients.unshift(item);

        this.addedItem = {
            id: 0,
            createTime: '',
            city: '',
            email: '',
            firstName: '',
            lastName: '',
            phone: '', 
            isFavorite: false, 
        };
    });
 }
 Favorite(item: Client){
    const sub = this.http.put<void>(`http://localhost:3000/clients/${item.id}/Favorite`, {}).subscribe(() => {
    item.isFavorite = true;
      sub.unsubscribe();
  });
}
  unFavorite(item: Client){
    const sub = this.http.put<void>(`http://localhost:3000/clients/${item.id}/unFavorite`, {}).subscribe(() => {
      item.isFavorite = false;
        sub.unsubscribe();
  });
}
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<Client[]>("http://localhost:3000/clients").subscribe(data => {
            this.clients = data;
        });

        
    }

}
