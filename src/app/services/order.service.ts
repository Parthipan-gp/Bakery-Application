import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderData } from '../model/order-discription';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  url:string=" http://localhost:3001/orderdis"

  sendDataToServer(data:OrderData){
    return this.http.post<OrderData>(this.url,data)
  }

  getDataFromServer():Observable<OrderData[]>{
    return this.http.get<OrderData[]>(this.url)
  }
}
