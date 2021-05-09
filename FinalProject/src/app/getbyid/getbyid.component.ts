import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class GetbyidComponent implements OnInit {
addform : FormGroup;
  product : Product | any;
  Product$ : Observable<Product>;
  constructor(private fb :FormBuilder, private myservice: AppService, private router: Router, private cd:ChangeDetectorRef ) {
    this.addform = this.fb.group({
      id: [null,[Validators.required]],
    });
    this.Product$ = new Observable();
   }

  ngOnInit(): void {
  }

  submit(){
    this.Product$ = this.myservice.getProduct(this.addform.value.id);
   this.Product$.subscribe(data => {
    this.product = data;
    this.cd.markForCheck();
     console.log(this.product);
   });
  }
}
