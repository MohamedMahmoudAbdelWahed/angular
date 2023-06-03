import { Injectable } from '@angular/core';
import { Icatgory } from '../models/icatgory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CatgoryServiceService {

  // categories : Icatgory[] ;
  // inject http service
  constructor(private httpclient : HttpClient) {
    // this.categories = [
    //     {id :1,Name: 'Table'} ,
    //     {id :2,Name: 'Chair'} ,
    //     {id :3,Name: 'TV'}
    //   ]
  }

  // day 5 task 3


 getAllCategories():Observable <Icatgory[] > {
  return this.httpclient.get<Icatgory[]>(`${environment.APIURL}/categories`)

 }
}
