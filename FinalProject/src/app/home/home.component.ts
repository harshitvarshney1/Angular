import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Observable<Product[]>;
  productsubscription : Subscription;
  constructor(private appservice: AppService) { 
    this.products = new Observable<Product[]>(
    );
    this.productsubscription = new Subscription(
    )
  }
  deleteitem(item : any){

    this.appservice.deleteProduct(item).subscribe(data =>{
      this.products = this.appservice.getProducts(); 
    });

  }
  ngOnInit(): void {
    this.products = this.appservice.getProducts();
  }
}
