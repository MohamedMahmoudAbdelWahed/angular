import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private httpclient:HttpClient) {}
 // day 5 task 4

//return array of products
//httpclient =>Contains all methods follow http example get
//httpclient =>type Observable
//Observable =>generic(You can specify the type of need I have return)
  getAllProducts():Observable<Iproduct[]>{
    // return this.httpclient.get<Iproduct[]>('http://localhost:3000/products');
    return this.httpclient.get<Iproduct[]>(`${environment.APIURL}/products`);
  }

  getProductByID(prdID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.APIURL}/products/${prdID}`);
  }

  getProductsByCategoryID(catID:number):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.APIURL}/products?CatgoryID=${catID}`);
  }
}
