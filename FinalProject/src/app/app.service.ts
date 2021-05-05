import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import {tap, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { 

  }
  private myerrorhandler(err : any) {
    console.log(err);
    return throwError(err);
  }
  getProducts() :Observable<Product[]> {
    const apiurl = environment.apibaseurl + "ProductShow/products";
    const headers = {'content-type' : 'application/json'};
 
    return this.http.get<Product[]>(apiurl,{'headers': headers}).pipe(
      tap(data=>{console.log(data)}),
      catchError(error=>{
        return throwError(error)
      })
    );
  }

  addProduct(product :Product) : Observable<Product>{
    const apiurl = environment.apibaseurl + "ProductShow/products";
    const headers = {'content-type' : 'application/json'};
    Object.defineProperty(product,'id',{'enumerable':false});
    const taskDto = JSON.stringify(product);
    return this.http.post<Product>(apiurl, taskDto, {headers: headers})
    .pipe(   
      catchError(error => this.myerrorhandler(error))
    );
  }
}
