import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from '../product';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-listproductwithasync',
  templateUrl: './listproductwithasync.component.html',
  styleUrls: ['./listproductwithasync.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListproductwithasyncComponent implements OnInit {
  @Input() items$ : Observable<Product[]>; 
  constructor(private appservice : AppService) {
    this.items$ = new Observable<Product[]>();
   }

  ngOnInit(): void {
  }

}
