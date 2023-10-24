import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productdata } from '../model/productdetails';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:3000/alldata"

  getData():Observable<Productdata[]>{
    return this.http.get<Productdata[]>(this.url)
  }

  getDataForId(id?: number): Observable<Productdata> {
    return this.http.get<Productdata>(`${this.url}/${id}`);
  }
}
