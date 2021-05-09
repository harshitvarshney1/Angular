import { Component, OnInit , OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Input, EventEmitter, Output} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-listwithmaterialtable',
  templateUrl: './listwithmaterialtable.component.html',
  styleUrls: ['./listwithmaterialtable.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListwithmaterialtableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['ID', 'Title', 'Price', 'Quantity' ,'Color','ExpiryDate', 'InStock', 'Update'];
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
    this.productsubscription = this.items$.subscribe(
      data=>{
        this.products = data
        this.cd.markForCheck();
      },
      error=>{
        console.log(error);
      },
      ()=>console.log('complete')
    )
  }

  ngOnDestroy() {
    if(this.productsubscription)
    {
      this.productsubscription.unsubscribe();
    }
  }

  deleteitem(item :any){
    this.deleteevent.emit(item);
   // this.cd.markForCheck();
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
}
