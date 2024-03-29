import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { UtilityService } from 'src/app/Utilityservice';
import { Product } from '../products-managment/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data: Product[] = [];

  add(item: Product) {
    this.utility.addToCart(item.id)
  }


  constructor(private http: HttpService, private utility: UtilityService) { }

  ngOnInit(): void {
    const sub = this.http.get<Product[]>("products").pipe(finalize(() => {
      if(sub?.unsubscribe){
        sub.unsubscribe();
      }
    })).subscribe(data => {
      this.data = data
    });
  }

}
