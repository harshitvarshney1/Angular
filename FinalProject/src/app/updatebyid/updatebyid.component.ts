import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';
 
@Component({
  selector: 'app-operation',
  templateUrl: './updatebyid.component.html',
  styleUrls: ['./updatebyid.component.css']
})
export class UpdatebyidComponent implements OnInit {
 
  
  product$ID : Observable<Product> ;
  selectidControl: FormControl = new FormControl(0);
  showProductDetails: boolean = false;
  editform: FormGroup | any;
  product:any;
  idc:any;
  id1:string |any;
 
  constructor(private fb: FormBuilder, private myservice: AppService, private router:Router,private route: ActivatedRoute) {
    this.product$ID = new Observable<Product>();
    this.editform = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: [ ,[Validators.required, Validators.min(0)]],
      quantity: [ ,[Validators.required, Validators.min(0)]],
      color: ['', Validators.required],
      expirydate: ['', Validators.required],
      inStock: [true,Validators.required]
    });
  }
 
  ngOnInit(): void {  
         this.id1 = this.route.snapshot.paramMap.get('id')
         let idnew = this.id1 as unknown as number;
         console.log(idnew)
      this.product$ID = this.myservice.getProduct(idnew)  
      this.product$ID.subscribe(u=>{
      this.editform.get('id')?.setValue(u.id);
      this.editform.get('title')?.setValue(u.title);
      this.editform.get('price')?.setValue(u.price);
      this.editform.get('quantity')?.setValue(u.quantity);
      this.editform.get('color')?.setValue(u.color);
      this.editform.get('expirydate')?.setValue(u.expiryDate);
      this.editform.get('inStock')?.setValue(u.inStock);
    
    })
  }
  update(){
    let product:Product = {...this.editform.value};
    this.myservice.updateProduct(product).subscribe(
      ()=>this.router.navigate(['/home'])
    );
   
  }
 
}