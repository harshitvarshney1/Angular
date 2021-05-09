import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from '../product';
import { Observable, Subscription } from 'rxjs';
import { HeaderRowOutlet } from '@angular/cdk/table';
@Component({
  selector: 'app-listproductwithasync',
  templateUrl: './listproductwithasync.component.html',
  styleUrls: ['./listproductwithasync.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListproductwithasyncComponent implements OnInit {
  @Input() items$ : Observable<Product[]>; 
  @Output()  deleteevent : EventEmitter<any> = new EventEmitter<any>();
  // ubaseurl= "updateproducts";
  // dbaseurl = "deleteproduct";
  constructor(private appservice : AppService) {
    this.items$ = new Observable<Product[]>();
   }

   deleteitem(item :any){
    this.deleteevent.emit(item);
  }

  ngOnInit(): void {
    
  }
}
