import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Input, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';


@Component({
  selector: 'app-listproductwithsubscribe',
  templateUrl: './listproductwithsubscribe.component.html',
  styleUrls: ['./listproductwithsubscribe.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListproductwithsubscribeComponent implements OnInit, OnDestroy {
  products : Product[] = [];       
  // ubaseurl= "updateproducts";
  // dbaseurl = "deleteproduct";  
  @Input() items$ : Observable<Product[]>;    
  @Output()  deleteevent : EventEmitter<any> = new EventEmitter<any>();
  productsubscription : Subscription;
  constructor(private appservice: AppService, private cd: ChangeDetectorRef) { 
    this.productsubscription = new Subscription();
    this.items$ = new Observable<Product[]>();
  }

  ngOnInit(): void {
  }
  //   this.productsubscription = this.items$.subscribe(
  //     data=>{
  //       this.products = data
  //       this.cd.markForCheck();
  //     },
  //     error=>{
  //       console.log(error);
  //     },
  //     ()=>console.log('complete')
  //   )
  // }

  ngOnDestroy() {
    if(this.productsubscription)
    {
      this.productsubscription.unsubscribe();
    }
  }

  ngOnChanges(): void {
    this.productsubscription= this.items$.subscribe(
      data=>{this.products= data;
        this.cd.markForCheck();
      },
      error=>{
        console.log(error);
      },
      ()=>console.log('complete')
      
    )
  }
  deleteitem(item :any){
    this.deleteevent.emit(item);
   // this.cd.markForCheck();
  }
}
