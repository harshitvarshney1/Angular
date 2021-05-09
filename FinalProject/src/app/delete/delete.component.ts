import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  products$: Observable<Product[]>;
  selectidControl: FormControl = new FormControl(0);
  showProductDetails: boolean = false;
  deleteform: FormGroup | any;

  constructor(private fb: FormBuilder, private myservice: AppService, private router:Router) {
    this.products$ = new Observable<Product[]>();
    this.deleteform = this.fb.group({
      title: ['', Validators.required],
      price: [ ,[Validators.required, Validators.min(0)]],
      quantity: [ ,[Validators.required, Validators.min(0)]],
      color: ['', Validators.required],
      expirydate: ['', Validators.required],
      inStock: [true,Validators.required]
    });
  }

  ngOnInit(): void {
    this.products$ = this.myservice.getProducts();
  }


  showDetails() {
    if (this.selectidControl.value != "0") {
      this.showProductDetails = true;
      this.myservice.getProduct(this.selectidControl.value).subscribe(
        data => {
          this.deleteform.get('title').setValue(data.title);
          this.deleteform.get('price').setValue(data.price);
          this.deleteform.get('quantity').setValue(data.quantity);
          this.deleteform.get('color').setValue(data.color);
          this.deleteform.get('expirydate').setValue(data.expiryDate);
          this.deleteform.get('inStock').setValue(data.inStock);
        }
      );
    }
  }

  delete(){
    let product:Product = {...this.deleteform.value};
    product.id = Number(this.selectidControl.value);
    this.myservice.deleteProduct(product).subscribe();
    this.router.navigate(['/home']);
  }
}




 
  
 
 
  