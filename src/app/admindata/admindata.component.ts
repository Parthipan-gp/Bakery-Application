import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { OrderData } from '../model/order-discription';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-admindata',
  templateUrl: './admindata.component.html',
  styleUrls: ['./admindata.component.css']
})
export class AdmindataComponent {

  

  customerRequest:OrderData[]=[]
  displayedColumns: string[] = ['id','cakeName','dateOfOrder','customerName' , 'customerEmail','phoneNumber','citation','price','quantity','totalPrice'];

  
  
  constructor(private orderservice:OrderService,private authservice:AuthService, private routerservice:RouterService){}

  ngOnInit(){
    this.orderservice.getDataFromServer().subscribe({
      next: data => {
        this.customerRequest = data
      },
      error: error => {
        alert('Failed to Fetch Notes Due to Server Error !!')
      }
    })
  }


 

}
