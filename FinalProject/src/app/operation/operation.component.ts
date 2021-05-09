import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})

export class OperationComponent implements OnInit {
  // products: Observable<Product[]>;
  constructor(private appservice : AppService , private route: ActivatedRoute, private router : Router) { 
    // this.products = new Observable<Product[]>(
      //);
  }
  product : any;
  ngOnInit(): void 
  {
    let id = this.route.snapshot.params['id'] ;
    this.appservice.getProduct(id).subscribe(u=>{
      console.log(u) ;
      this.product=u ;
    })
  }

  delete()
  {
    this.appservice.deleteProduct(this.product).subscribe(
      ()=>this.router.navigate(['/home'])
    );
  }
  // deleteitem(item : any){
  //   this.appservice.deleteProduct(item).subscribe(data =>{
  //     this.products = this.appservice.getProducts(); 
  //   });
}
